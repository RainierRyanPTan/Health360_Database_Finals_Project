// ===== CATEGORY FILTER =====
const categoryButtons = document.querySelectorAll('.category');
const products = document.querySelectorAll('.product-card');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.dataset.category;

    products.forEach(product => {
      if (category === 'all' || product.classList.contains(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

// ===== ADD TO CART =====
const cartButtons = document.querySelectorAll('.product-card button');
cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('h3').innerText;

    // Popup message that fades out
    const popup = document.createElement('div');
    popup.className = 'cart-popup';
    popup.innerText = `${productName} added to cart!`;
    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 2000);
  });
});

// ===== LOGOUT =====
document.querySelector('.logout').addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('Are you sure you want to log out?')) {
    window.location.href = 'index.html';
  }
});

// ===== SMALL CART POPUP STYLE =====
const style = document.createElement('style');
style.innerHTML = `
.cart-popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #0077b6;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  animation: fadeInOut 2s ease forwards;
}
@keyframes fadeInOut {
  0% {opacity: 0; transform: translateY(20px);}
  20% {opacity: 1; transform: translateY(0);}
  80% {opacity: 1;}
  100% {opacity: 0; transform: translateY(20px);}
}`;
document.head.appendChild(style);
