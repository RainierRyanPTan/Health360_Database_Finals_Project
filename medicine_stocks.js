// ===== LOGOUT =====
document.querySelector('.logout').addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('Are you sure you want to log out?')) {
    window.location.href = 'index.html';
  }
});

// ===== FILTER MEDICINES =====
const filter = document.getElementById('stockFilter');
const rows = document.querySelectorAll('#stockTable tbody tr');

filter.addEventListener('change', () => {
  const selected = filter.value;
  rows.forEach(row => {
    const status = row.querySelector('.stock-status');
    if (
      selected === 'all' ||
      (selected === 'low' && status.classList.contains('low')) ||
      (selected === 'normal' && status.classList.contains('normal'))
    ) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

// ===== ADD MEDICINE =====
document.getElementById('addMedicineBtn').addEventListener('click', () => {
  const name = prompt('Enter medicine name:');
  const pharmacy = prompt('Enter pharmacy name:');
  const category = prompt('Enter medicine category:');
  const quantity = parseInt(prompt('Enter quantity:'), 10);

  if (name && pharmacy && category && !isNaN(quantity)) {
    const tbody = document.querySelector('#stockTable tbody');
    const stockStatus = quantity < 30 ? 'low' : 'normal';
    const newRow = document.createElement('tr');
    newRow.className = stockStatus === 'low' ? 'low-stock' : '';
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${pharmacy}</td>
      <td>${category}</td>
      <td>${quantity}</td>
      <td><span class="stock-status ${stockStatus}">${stockStatus === 'low' ? 'Low Stock' : 'Normal'}</span></td>
      <td>
        <button class="btn outline edit-btn">Edit</button>
        <button class="btn remove-btn">Remove</button>
      </td>`;
    tbody.appendChild(newRow);
    alert('Medicine added successfully!');
  } else {
    alert('Please fill out all fields correctly.');
  }
});

// ===== REMOVE MEDICINE =====
document.querySelectorAll('.remove-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (confirm('Remove this medicine from stock list?')) {
      btn.closest('tr').remove();
      alert('Medicine removed.');
    }
  });
});
