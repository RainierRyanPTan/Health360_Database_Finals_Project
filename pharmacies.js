// ===== LOGOUT =====
document.querySelector('.logout').addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('Are you sure you want to log out?')) {
    window.location.href = 'index.html';
  }
});

// ===== FILTER PHARMACIES =====
const filter = document.getElementById('stockFilter');
const rows = document.querySelectorAll('#pharmacyTable tbody tr');

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

// ===== ADD PHARMACY =====
document.getElementById('addPharmacyBtn').addEventListener('click', () => {
  const name = prompt('Enter pharmacy name:');
  const address = prompt('Enter address:');
  const contact = prompt('Enter contact number:');
  const stock = prompt('Enter stock status (normal/low):');

  if (name && address && contact && stock) {
    const tbody = document.querySelector('#pharmacyTable tbody');
    const newRow = document.createElement('tr');
    const stockClass = stock.toLowerCase() === 'low' ? 'low' : 'normal';
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${address}</td>
      <td>${contact}</td>
      <td><span class="stock-status ${stockClass}">${stockClass === 'low' ? 'Low Stock' : 'Normal'}</span></td>
      <td>
        <button class="btn outline edit-btn">Edit</button>
        <button class="btn remove-btn">Remove</button>
      </td>`;
    tbody.appendChild(newRow);
    alert('Pharmacy added successfully!');
  } else {
    alert('Incomplete information.');
  }
});

// ===== REMOVE PHARMACY =====
document.querySelectorAll('.remove-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (confirm('Remove this pharmacy?')) {
      btn.closest('tr').remove();
      alert('Pharmacy removed.');
    }
  });
});
