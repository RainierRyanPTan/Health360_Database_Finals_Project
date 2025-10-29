// ===== Chart.js Configurations =====

// Medicine Sales Trend (Line Chart)
const ctx1 = document.getElementById("salesChart");
new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Medicines Sold",
        data: [120, 190, 150, 200, 220, 180, 240],
        borderColor: "#00bfff",
        backgroundColor: "rgba(0,191,255,0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true, position: "bottom" },
    },
    scales: { y: { beginAtZero: true } },
  },
});

// Top Used Medicines (Doughnut Chart)
const ctx2 = document.getElementById("medicineChart");
new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Paracetamol", "Vitamin C", "Amoxicillin", "Ibuprofen", "Cetirizine"],
    datasets: [
      {
        data: [35, 25, 15, 15, 10],
        backgroundColor: ["#007bff", "#00c2ff", "#33d9b2", "#ffb142", "#ff5252"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
  },
});

// ===== Page Interactions =====

// Logout Button
document.querySelector(".logout").addEventListener("click", () => {
  alert("Logging out...");
  window.location.href = "index.html";
});

// Simple notification when hovering over stat cards
document.querySelectorAll(".stat-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-4px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Example table interactivity: highlight rows with “Low Stock”
document.querySelectorAll("tbody tr").forEach(row => {
  if (row.textContent.includes("Low Stock")) {
    row.style.background = "#fff5f5";
  }
});
