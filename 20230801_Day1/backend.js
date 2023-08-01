// This script handles the back-end functionality.

// Function to handle messages from the front-end script
function handleFrontendMessage(event) {
    const message = event.data;
    if (message.type === 'userInput') {
        // Process the user input (you can do any checks here)
        // For demonstration purposes, we'll simply send the input back to the front-end
        const response = { type: 'displayInput', data: message.data };
        // Send the response back to the front-end
        window.parent.postMessage(response, '*');
    }
}

// Add event listener to receive messages from the front-end script
window.addEventListener('message', handleFrontendMessage);
