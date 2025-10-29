document.querySelector('.logout').addEventListener('click', () => {
  if (confirm('Are you sure you want to log out?')) {
    window.location.href = 'index.html';
  }
});
