
// Health360 Login Script

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const role = document.getElementById("roleSelect").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!role || !username || !password) {
      alert("Please complete all fields.");
      return;
    }

    // Save role and username in local storage
    localStorage.setItem("userRole", role);
    localStorage.setItem("username", username);

    // Redirect based on role
    switch (role) {
      case "user":
        window.location.href = "home.html";
        break;
      case "admin":
        window.location.href = "admin.html";
        break;
      case "pharmacy":
        window.location.href = "pharmacy.html";
        break;
      default:
        alert("Invalid role selected.");
    }
  });
});
