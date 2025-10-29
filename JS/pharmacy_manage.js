// ===== Logout =====
document.querySelector('.logout').addEventListener('click', () => {
  alert('Logging out...');
  window.location.href = 'index.html';
});

// ===== Modal Logic =====
const addModal = document.getElementById('addModal');
const openModal = document.getElementById('openAddModal');
const closeModal = document.getElementById('closeModal');
const form = document.getElementById('addMedicineForm');
const table = document.querySelector('#medicineTable tbody');

// Open modal
openModal.addEventListener('click', () => {
  addModal.style.display = 'flex';
});

// Close modal
closeModal.addEventListener('click', () => {
  addModal.style.display = 'none';
});

// Add new medicine
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('medName').value;
  const category = document.getElementById('medCategory').value;
  const price = document.getElementById('medPrice').value;
  const stock = document.getElementById('medStock').value;
  const id = "#MED-" + Math.floor(Math.random() * 9000 + 1000);

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${category}</td>
    <td>₱${parseFloat(price).toFixed(2)}</td>
    <td>${stock}</td>
    <td>
      <button class="edit-btn">✏️ Edit</button>
      <button class="delete-btn">🗑️ Delete</button>
    </td>
  `;
  table.appendChild(newRow);
  addModal.style.display = 'none';
  form.reset();
  alert(`${name} added successfully!`);
});

// ===== Delete Medicine =====
table.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const row = e.target.closest('tr');
    const medName = row.children[1].textContent;
    if (confirm(`Are you sure you want to delete ${medName}?`)) {
      row.remove();
    }
  }
});

// ===== Edit Medicine (simplified prompt version) =====
table.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    const row = e.target.closest('tr');
    const name = prompt("Edit Medicine Name:", row.children[1].textContent);
    const price = prompt("Edit Price (₱):", row.children[3].textContent.replace('₱', ''));
    const stock = prompt("Edit Stock Quantity:", row.children[4].textContent);

    if (name && price && stock) {
      row.children[1].textContent = name;
      row.children[3].textContent = `₱${parseFloat(price).toFixed(2)}`;
      row.children[4].textContent = stock;
      alert(`${name} updated successfully!`);
    }
  }
});
