const toggle = document.getElementById("themeToggle");
const body = document.body;

function updateIcon() {
  toggle.textContent = body.classList.contains("dark") ? "✦" : "⏾";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  updateIcon();
});

// Initial state
updateIcon();

// Expand Project Card
// Get the elements
const triggerDiv = document.getElementById("triggerDiv");
const popup = document.getElementById("cardPopup");

// Function to open the pop-up
function openPopup() {
  popup.style.display = "flex"; // Make the pop-up visible (using flex for centering)
}

// Function to close the pop-up
function closePopup() {
  popup.style.display = "none"; // Hide the pop-up
}

// Add click event listener to the trigger div
triggerDiv.addEventListener("click", openPopup);

// Optional: Close the pop-up if the user clicks anywhere outside of the content
window.onclick = function (event) {
  if (event.target == popup) {
    closePopup();
  }
};
