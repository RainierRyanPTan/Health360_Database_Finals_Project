// Logout confirmation
document.querySelector('.logout-btn').addEventListener('click', () => {
  if (confirm('Log out from Health360?')) {
    window.location.href = 'index.html';
  }
});

// Interactive alert for demo
document.querySelectorAll('.card button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const title = e.target.closest('.card').querySelector('h4').textContent;
    alert(`Opening ${title}...`);
  });
});
