// ===== NOTIFICATIONS.JS =====

// Logout functionality
document.querySelector(".logout").addEventListener("click", () => {
  alert("You have logged out successfully!");
  window.location.href = "login.html";
});

// Mark as read when clicked
document.querySelectorAll(".notification").forEach(notification => {
  notification.addEventListener("click", () => {
    notification.classList.remove("unread");
    notification.style.opacity = "0.7";
  });
});

// Clear all notifications
document.getElementById("clearAll").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all notifications?")) {
    document.querySelector(".notifications-list").innerHTML =
      "<p class='no-notifications'>You have no new notifications 🎉</p>";
  }
});

// Page load message
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Notifications page loaded for Stephen Curry!");
});
