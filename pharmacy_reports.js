// ===== Logout =====
document.querySelector('.logout').addEventListener('click', () => {
  alert('Logging out...');
  window.location.href = 'index.html';
});

// ===== Report Submission =====
document.getElementById('reportForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const type = document.getElementById('reportType').value;
  const desc = document.getElementById('reportDesc').value;
  const date = new Date().toISOString().split('T')[0];
  const file = document.getElementById('fileUpload').files[0];

  if (!type || !desc) {
    alert('Please fill in all required fields.');
    return;
  }

  // Generate a fake report ID
  const reportID = "#REP" + Math.floor(Math.random() * 9000 + 1000);

  const table = document.querySelector('#reportTable tbody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${reportID}</td>
    <td>${type}</td>
    <td>${desc}</td>
    <td>${date}</td>
    <td><span class="status sent">Sent</span></td>
  `;
  table.prepend(newRow);

  // Reset the form
  document.getElementById('reportForm').reset();

  alert(file 
    ? `Report (${type}) submitted with file: ${file.name}` 
    : `Report (${type}) submitted successfully!`);
});
