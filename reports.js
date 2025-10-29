// ===== LOGOUT =====
document.querySelector('.logout').addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('Are you sure you want to log out?')) {
    window.location.href = 'index.html';
  }
});

// ===== CHARTS =====
const salesCtx = document.getElementById('salesChart');
new Chart(salesCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales (₱)',
      data: [45000, 52000, 49000, 57000, 61000, 66000],
      borderColor: '#0077b6',
      backgroundColor: 'rgba(0,119,182,0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: { responsive: true, scales: { y: { beginAtZero: true } } }
});

const categoryCtx = document.getElementById('categoryChart');
new Chart(categoryCtx, {
  type: 'doughnut',
  data: {
    labels: ['Pain Relief', 'Antibiotics', 'Supplements', 'Allergies', 'Others'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: ['#0077b6','#00b4d8','#90e0ef','#48cae4','#0096c7']
    }]
  },
  options: {
    plugins: { legend: { position: 'bottom' } }
  }
});
