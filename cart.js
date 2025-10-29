// ===== LOGOUT =====
document.querySelector(".logout").addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to log out?")) {
    window.location.href = "index.html";
  }
});

// ===== REMOVE ITEM =====
const removeButtons = document.querySelectorAll(".remove-btn");
removeButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.closest("tr").remove();
    updateTotal();
    showPopup("Item removed from cart ❌");
  });
});

// ===== CLEAR CART =====
document.querySelector(".clear-btn").addEventListener("click", () => {
  if (confirm("Clear all items from cart?")) {
    document.querySelector("#cartBody").innerHTML = "";
    updateTotal();
    showPopup("Cart cleared 🗑️");
  }
});

// ===== CHECKOUT =====
document.querySelector(".checkout-btn").addEventListener("click", () => {
  if (confirm("Proceed to checkout?")) {
    showPopup("Checkout successful! ✅");
  }
});

// ===== UPDATE TOTAL =====
function updateTotal() {
  let total = 0;
  const rows = document.querySelectorAll("#cartBody tr");
  rows.forEach(row => {
    const price = parseFloat(row.children[1].innerText.replace("₱", ""));
    const qty = parseInt(row.children[2].innerText);
    total += price * qty;
  });

  document.querySelector(".cart-total strong").innerText = `Total: ₱${total.toFixed(2)}`;
}

// ===== POPUP MESSAGE =====
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = message;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 2000);
}
