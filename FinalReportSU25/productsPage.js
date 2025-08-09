// productsPage.js
// Script for handling product page logic (add to cart, UI, etc.)

document.addEventListener('DOMContentLoaded', function() {
  // Gán id cho từng sản phẩm nếu chưa có
  document.querySelectorAll('.products-list .product-card').forEach(function(card, idx) {
    card.setAttribute('data-product-id', idx + 1);
  });
  document.querySelectorAll('.btn-add').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var card = btn.closest('.product-card');
      var productId = card.getAttribute('data-product-id');
      var name = card.querySelector('.product-name')?.textContent?.trim() || '';
      var priceText = card.querySelector('.product-price')?.textContent || '';
      var price = priceText.replace(/[^\d]/g, '');
  addToCart(productId, 1, name, price);
      // Cập nhật badge số lượng trên icon giỏ hàng
  // Lấy lại cart từ localStorage để cập nhật badge đúng
  var cartData = JSON.parse(localStorage.getItem('cart') || '[]');
  var cartCount = cartData.reduce((sum, item) => sum + item.quantity, 0);
  var badge = document.querySelector('.cart-badge');
  if (badge) badge.textContent = cartCount;
    });
  });
});
