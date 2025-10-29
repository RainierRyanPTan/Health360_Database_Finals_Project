
document.addEventListener("DOMContentLoaded", () => {
  console.log("Profile page loaded successfully!");
});
// ===== PROFILE PAGE JS =====

// Logout confirmation (same behavior as home.js)
document.querySelector(".logout").addEventListener("click", () => {
  alert("You have logged out successfully!");
  window.location.href = "login.html";
});

// Edit / Save toggling
const editBtn = document.getElementById("editProfile");
const saveBtn = document.getElementById("saveProfile");

editBtn.addEventListener("click", () => {
  const spans = document.querySelectorAll("#email, #phone, #address, #blood, #height, #weight, #meds, #emergencyName, #emergencyPhone");
  spans.forEach(span => {
    const current = span.textContent;
    const input = document.createElement("input");
    input.value = current;
    input.classList.add("editable");
    span.replaceWith(input);
  });

  editBtn.classList.add("hidden");
  saveBtn.classList.remove("hidden");
});

saveBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".editable");
  inputs.forEach(input => {
    const span = document.createElement("span");
    span.textContent = input.value;
    input.replaceWith(span);
  });

  alert("Profile changes saved successfully!");
  saveBtn.classList.add("hidden");
  editBtn.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Profile page loaded successfully!");
});
