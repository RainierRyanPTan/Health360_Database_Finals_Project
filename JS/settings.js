// ===== LOGOUT =====
document.querySelector('.logout').addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('Are you sure you want to log out?')) {
    window.location.href = 'index.html';
  }
});

// ===== SAVE ACCOUNT INFO =====
document.querySelectorAll('.save-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Settings saved successfully!');
  });
});

// ===== UPDATE PASSWORD =====
document.querySelector('.update-pass').addEventListener('click', () => {
  const newPass = document.getElementById('newPass').value;
  const confirmPass = document.getElementById('confirmPass').value;

  if (newPass === confirmPass && newPass.length > 5) {
    alert('Password updated successfully!');
  } else {
    alert('Passwords do not match or too short.');
  }
});
