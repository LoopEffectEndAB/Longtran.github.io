// customerStorage.js
// Lưu và lấy thông tin khách hàng từ localStorage

function saveCustomerInfo(customer) {
  if (typeof customer !== 'object' || !customer) return;
  localStorage.setItem('customerInfo', JSON.stringify(customer));
}

function getCustomerInfo() {
  const data = localStorage.getItem('customerInfo');
  return data ? JSON.parse(data) : null;
}

// Ví dụ sử dụng:
// saveCustomerInfo({ name: 'Nguyen Van A', email: 'a@gmail.com', phone: '0123456789' });
// const info = getCustomerInfo();
