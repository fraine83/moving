// Get the modal, button, and close elements
const modal = document.getElementById("quoteModal");
const btn = document.getElementById("quoteButton");
const span = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
btn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close the modal when the close button (x) is clicked
span.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
document.getElementById("quoteForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for your request! We will contact you shortly.");
    modal.style.display = "none";
});