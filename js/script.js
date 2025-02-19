// Get the modals, buttons, and close elements
const quoteModal = document.getElementById("quoteModal");
const thankYouModal = document.getElementById("thankYouModal");
const btn = document.getElementById("quoteButton");
const closeButtons = document.querySelectorAll(".close");

// Open the quote modal when the button is clicked
btn.addEventListener("click", () => {
    quoteModal.style.display = "block";
});

// Close modals when the close button (x) is clicked
closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        quoteModal.style.display = "none";
        thankYouModal.style.display = "none";
    });
});

// Close modals when clicking outside of them
window.addEventListener("click", (event) => {
    if (event.target === quoteModal) {
        quoteModal.style.display = "none";
    }
    if (event.target === thankYouModal) {
        thankYouModal.style.display = "none";
    }
});

// Handle form submission
document.getElementById("quoteForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Close the quote modal
    quoteModal.style.display = "none";

    // Open the thank you modal
    thankYouModal.style.display = "block";
});