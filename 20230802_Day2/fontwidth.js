// Function to adjust font size in the main section
function adjustFontSize() {
    const mainSection = document.querySelector('.main');
    const maxWidth = 400; // Maximum width in pixels for the main section
    const maxCharsPerLine = 40; // Maximum number of characters per line

    const mainWidth = mainSection.getBoundingClientRect().width;
    const fontSize = (mainWidth / maxCharsPerLine) * 1.4; // Adjust the multiplication factor to control the font size

    // Apply the calculated font size to the main section
    mainSection.style.fontSize = `${fontSize}px`;
}

// Call the adjustFontSize function on window resize
window.addEventListener('resize', adjustFontSize);

// Call the adjustFontSize function initially to set the font size
adjustFontSize();
