// This script handles the main functionality of the page.

// Get references to the input field and the Enter button
const inputField = document.getElementById('inputField');
const enterButton = document.getElementById('enterButton');

// Function to handle the "Enter" button click
function handleEnterButtonClick() {
    const userInput = inputField.value;
    // Send user input to the back-end script
    sendMessageToBackend(userInput);
    // Clear the input field after sending the input
    inputField.value = '';
    // Put focus back on the input field
    inputField.focus();
}

// Attach the click event handler to the Enter button
enterButton.addEventListener('click', handleEnterButtonClick);

// Function to send a message to the back-end script
function sendMessageToBackend(message) {
    // Create a message object
    const messageObject = { type: 'userInput', data: message };
    // Send the message to the back-end script
    window.parent.postMessage(messageObject, '*');
}

// Function to handle messages from the back-end script
function handleBackendMessage(event) {
    console.log('Received message from backend:', event.data);
    const message = event.data;
    if (message.type === 'displayInput') {
        // Display the user input in the main content container
        displayUserInput(message.data);
    }
}

// Add event listener to receive messages from the back-end script
window.addEventListener('message', handleBackendMessage);

// Function to display user input in the main content container
function displayUserInput(input) {
    console.log('Displaying user input:', input);
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