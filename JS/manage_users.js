// ===== LOGOUT =====
document.querySelector('.logout').addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('Are you sure you want to log out?')) {
    window.location.href = 'index.html';
  }
});

// ===== FILTER USERS BY ROLE =====
const filter = document.getElementById('userFilter');
const rows = document.querySelectorAll('#userTable tbody tr');

filter.addEventListener('change', () => {
  const selected = filter.value;
  rows.forEach(row => {
    const badge = row.querySelector('.stat-badge');
    if (selected === 'all' || badge.classList.contains(`badge-${selected}`)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

// ===== REMOVE USER =====
document.querySelectorAll('.remove-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (confirm('Remove this user?')) {
      btn.closest('tr').remove();
      alert('User removed successfully!');
    }
  });
});

// ===== ADD USER (Modal) =====
document.getElementById('addUserBtn').addEventListener('click', () => {
  const name = prompt('Enter new user name:');
  const email = prompt('Enter email:');
  const role = prompt('Enter role (user/pharmacy/admin):');

  if (name && email && role) {
    const tbody = document.querySelector('#userTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td><span class="stat-badge badge-${role.toLowerCase()}">${role}</span></td>
      <td>${email}</td>
      <td>---</td>
      <td>
        <button class="btn outline edit-btn">Edit</button>
        <button class="btn remove-btn">Remove</button>
      </td>`;
    tbody.appendChild(newRow);
    alert('New user added successfully!');
  } else {
    alert('Incomplete user information.');
  }
});
