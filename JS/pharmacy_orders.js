// ===== Logout =====
document.querySelector('.logout').addEventListener('click', () => {
  alert('Logging out...');
  window.location.href = 'index.html';
});

// ===== Search Filter =====
const searchOrders = document.getElementById('searchOrders');
searchOrders.addEventListener('keyup', () => {
  const filter = searchOrders.value.toLowerCase();
  const rows = document.querySelectorAll('#ordersTable tbody tr');
  rows.forEach(row => {
    const customer = row.cells[1].textContent.toLowerCase();
    row.style.display = customer.includes(filter) ? '' : 'none';
  });
});

// ===== Status Filter =====
const statusFilter = document.getElementById('statusFilter');
statusFilter.addEventListener('change', () => {
  const selected = statusFilter.value.toLowerCase();
  document.querySelectorAll('#ordersTable tbody tr').forEach(row => {
    const status = row.dataset.status.toLowerCase();
    row.style.display = (selected === 'all' || selected === status) ? '' : 'none';
  });
});

// ===== Approve, Reject, Deliver Buttons =====
document.querySelectorAll('.approve-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.closest('tr');
    row.dataset.status = 'Approved';
    row.querySelector('.status').textContent = 'Approved';
    row.querySelector('.status').className = 'status approved';
    btn.parentElement.innerHTML = '<button class="deliver-btn">Mark Delivered</button>';
    alert('Order approved!');
  });
});

document.querySelectorAll('.reject-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.closest('tr');
    row.remove();
    alert('Order rejected and removed.');
  });
});

document.querySelectorAll('.deliver-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.closest('tr');
    row.dataset.status = 'Delivered';
    row.querySelector('.status').textContent = 'Delivered';
    row.querySelector('.status').className = 'status delivered';
    btn.parentElement.innerHTML = '<button class="view-btn">View</button>';
    alert('Order marked as delivered!');
  });
});
