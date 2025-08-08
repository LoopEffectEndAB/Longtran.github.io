// Hiệu ứng thêm vào giỏ hàng
const addBtns = document.querySelectorAll('.btn-add');
addBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    alert('Đã thêm sản phẩm vào giỏ hàng!');
  });
});
// Có thể thêm hiệu ứng slider/banner ở đây nếu muốn
