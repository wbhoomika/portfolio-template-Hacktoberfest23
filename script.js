// Get the Scroll to Top button element by its ID
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Listen for scroll events on the window
window.addEventListener("scroll", () => {
    // Show button when scrolled more than 300px from the top
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Add click event listener to the Scroll to Top button
scrollToTopBtn.addEventListener("click", () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});
