document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input field and buttons
    const inputField = document.querySelector('#textInput'); // Make sure this matches exactly with Sparkle's ID
    const submitButton = document.querySelector('#submitButton'); // Make sure this matches exactly with Sparkle's ID
    const downloadButton = document.querySelector('#downloadButton'); // Make sure this matches exactly with Sparkle's ID

    // Log to check if IDs are correct
    console.log('Input field:', inputField);
    console.log('Submit button:', submitButton);
    console.log('Download button:', downloadButton);

    // Check if elements exist
    if (!inputField || !submitButton || !downloadButton) {
        console.error("One or more elements are not found!");
        return; // Exit if elements are not found
    }

    // Initially hide the download button
    downloadButton.style.display = 'none';

    // Add event listener to the submit button
    submitButton.addEventListener('click', function() {
        const expectedText = 'correct-text'; // Replace with the expected text value

        // Log input value to check
        console.log('Input value:', inputField.value);

        if (inputField.value === expectedText) {
            downloadButton.style.display = 'block';
        } else {
            alert('Incorrect input!');
        }
    });
});
