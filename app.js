const textArray = ["Welcome to My Portfolio", "Explore My Work", "Let’s Connect!"];
let index = 0;
let charIndex = 0;

function typeWriterEffect() {
    const typewriterElement = document.getElementById("typewriter");
    if (charIndex < textArray[index].length) {
        typewriterElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriterEffect, 100); // Typing speed
    } else {
        setTimeout(() => {
            typewriterElement.textContent = ""; // Clear text after a delay
            charIndex = 0;
            index = (index + 1) % textArray.length; // Move to the next string
            typeWriterEffect();
        }, 2000); // Pause between lines
    }
}

typeWriterEffect();


/*----------------For Button*/

const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");

    // Update the button text based on the current mode
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "🌙 Night Mode";
    } else {
        toggleButton.textContent = "🌞 Day Mode";
    }
});


/*------For mobile Navbar*/

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle the mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});