// ===== Logout button =====
document.querySelector('.logout').addEventListener('click', () => {
  alert('Logging out...');
  window.location.href = 'index.html';
});

// ===== Search filter =====
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  const rows = document.querySelectorAll('#inventoryTable tbody tr');
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    row.style.display = name.includes(filter) ? '' : 'none';
  });
});

// ===== Add new medicine =====
document.getElementById('addMedicineBtn').addEventListener('click', () => {
  const name = prompt('Enter new medicine name:');
  if (name) {
    const table = document.querySelector('#inventoryTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>Category</td>
      <td>0</td>
      <td>₱0.00</td>
      <td>YYYY-MM-DD</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;
    table.appendChild(newRow);
    alert(`${name} has been added to inventory.`);
  }
});

// ===== Edit / Delete Buttons =====
document.querySelectorAll('.edit-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Edit medicine details.');
  });
});

document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this medicine?')) {
      btn.closest('tr').remove();
    }
  });
});
