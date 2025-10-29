// ===== Logout =====
document.querySelector('.logout').addEventListener('click', () => {
  alert('Logging out...');
  window.location.href = 'index.html';
});

// ===== Search Filter =====
const searchLowStock = document.getElementById('searchLowStock');
searchLowStock.addEventListener('keyup', () => {
  const filter = searchLowStock.value.toLowerCase();
  const rows = document.querySelectorAll('#lowStockTable tbody tr');
  rows.forEach(row => {
    const name = row.cells[1].textContent.toLowerCase();
    row.style.display = name.includes(filter) ? '' : 'none';
  });
});

// ===== Select All Checkboxes =====
const selectAll = document.getElementById('selectAll');
selectAll.addEventListener('change', () => {
  const checks = document.querySelectorAll('.row-check');
  checks.forEach(ch => (ch.checked = selectAll.checked));
});

// ===== Refill Buttons =====
document.querySelectorAll('.refill-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const med = btn.closest('tr').cells[1].textContent;
    alert(`Refill request for ${med} sent to Admin.`);
  });
});

// ===== Mark as Restocked =====
document.getElementById('restockSelectedBtn').addEventListener('click', () => {
  const selectedRows = document.querySelectorAll('.row-check:checked');
  if (selectedRows.length === 0) {
    alert('Please select at least one medicine to mark as restocked.');
    return;
  }

  selectedRows.forEach(ch => {
    const row = ch.closest('tr');
    row.querySelector('.status').textContent = 'Restocked';
    row.querySelector('.status').className = 'status restocked';
    ch.checked = false;
  });

  document.getElementById('selectAll').checked = false;
  alert('Selected medicines marked as restocked!');
});
