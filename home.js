// ===== HOME.JS =====

// Logout confirmation
document.querySelector(".logout").addEventListener("click", () => {
  alert("You have logged out successfully!");
  window.location.href = "login.html";
});

// "Mark as Taken" for reminders
document.getElementById("markTaken").addEventListener("click", () => {
  alert("All medicines for today have been marked as taken ✅");
});

// Show greeting based on time
document.addEventListener("DOMContentLoaded", () => {
  const userName = "Stephen Curry";
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" :
    hour < 18 ? "Good Afternoon" :
    "Good Evening";
  document.getElementById("userName").textContent = userName;
  document.querySelector(".welcome-text h2").textContent = `${greeting}, ${userName} 👋`;
});
