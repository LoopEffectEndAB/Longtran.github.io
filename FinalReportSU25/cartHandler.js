// cartHandler.js
// Script to handle adding products to the cart
// Usage: Call addToCart(productId, quantity) to add an item

// Example cart structure (can be replaced with backend or localStorage)
let cart = [];

function addToCart(productId, quantity = 1, name = '', price = 0) {
    price = Number(price);
    // Check if product already in cart
    const index = cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
        cart[index].quantity += quantity;
    } else {
        cart.push({ productId, quantity, name, price });
    }
    saveCart();
    updateCartDisplay();
}

function updateCartDisplay() {
    // Update cart badge on all pages
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    // Update all possible badge selectors
    const badgeEls = document.querySelectorAll('.cart-badge, .count_item, .count_item_pr, .cart-popup-count');
    badgeEls.forEach(el => el.textContent = cartCount);
}

// Optional: Save/load cart from localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
    return cart;
}

// Load cart on page load
window.addEventListener('DOMContentLoaded', loadCart);


// Hiển thị sản phẩm trong giỏ hàng trên trang cart.html
function renderCart() {
    const cartData = typeof loadCart === 'function' ? loadCart() : (cart || []);
    const cartBody = document.getElementById('cart-body');
    const cartTotal = document.getElementById('cart-total');
    if (!cartBody || !cartTotal) return;
    cartBody.innerHTML = '';
    let total = 0;
    if (!cartData || cartData.length === 0) {
        cartBody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:#888;">Giỏ hàng trống</td></tr>';
    } else {
        cartData.forEach((item, idx) => {
            if (!item.name || typeof item.price === 'undefined') return;
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartBody.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>
                      <button class="btn-qty" data-action="decrease" data-idx="${idx}">-</button>
                      <span class="cart-qty">${item.quantity}</span>
                      <button class="btn-qty" data-action="increase" data-idx="${idx}">+</button>
                    </td>
                    <td>${item.price.toLocaleString('vi-VN')}₫</td>
                    <td>${itemTotal.toLocaleString('vi-VN')}₫</td>
                    <td><button class="btn-remove" data-idx="${idx}">Xóa</button></td>
                </tr>
            `;
        });
    }
    cartTotal.innerHTML = `<strong>Tổng cộng:</strong> ${total.toLocaleString('vi-VN')}₫`;

    // Gán sự kiện cho nút xóa và tăng/giảm số lượng
    cartBody.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = Number(btn.getAttribute('data-idx'));
            cart.splice(idx, 1);
            saveCart();
            renderCart();
            updateCartDisplay();
        });
    });
    cartBody.querySelectorAll('.btn-qty').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = Number(btn.getAttribute('data-idx'));
            const action = btn.getAttribute('data-action');
            if (action === 'increase') {
                cart[idx].quantity++;
            } else if (action === 'decrease' && cart[idx].quantity > 1) {
                cart[idx].quantity--;
            }
            saveCart();
            renderCart();
            updateCartDisplay();
        });
    });
}

// Luôn cập nhật badge giỏ hàng trên mọi trang khi load
document.addEventListener('DOMContentLoaded', updateCartDisplay);

// Nếu đang ở trang cart.html thì render giỏ hàng sau khi DOMContentLoaded
if (window.location.pathname.endsWith('cart.html')) {
    document.addEventListener('DOMContentLoaded', renderCart);
}
