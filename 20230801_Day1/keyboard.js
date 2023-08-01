// This script handles adjustments related to the on-screen keyboard.

// Adjust the page layout when the on-screen keyboard is active
function adjustLayoutForKeyboard() {
    const pageHeight = window.innerHeight;
    const halfPageHeight = pageHeight / 2;
    const mainContainer = document.querySelector('.main-container');
    mainContainer.style.maxHeight = `${halfPageHeight}px`;
}

// Attach the event listener to the window's resize event
window.addEventListener('resize', adjustLayoutForKeyboard);

// Call the function once on page load to set the initial layout
adjustLayoutForKeyboard();
