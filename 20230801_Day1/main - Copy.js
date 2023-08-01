// This script handles the main functionality of the page.

// Get references to the input field and the Enter button
const inputField = document.getElementById('inputField');
const enterButton = document.getElementById('enterButton');

// Function to handle the "Enter" button click
function handleEnterButtonClick() {
    const userInput = inputField.value;
    // Do something with the user input, e.g., display it on the page
    console.log(`You entered: ${userInput}`);
    // Clear the input field after processing the input
    inputField.value = '';
    // Put focus back on the input field
    inputField.focus();
}

// Attach the click event handler to the Enter button
enterButton.addEventListener('click', handleEnterButtonClick);

// Function to display user input in the main content container
function displayUserInput(input) {
    const mainContent = document.querySelector('.main-content');
    const userInputElement = document.createElement('p');
    userInputElement.textContent = input;
    mainContent.appendChild(userInputElement);
}

// Handle Enter key press
inputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const command = inputField.value;
        // Implement your command processing logic here
        console.log('Command:', command);
        inputField.value = '';
        inputField.focus();
    }
});