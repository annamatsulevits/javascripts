document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input field and buttons
    const inputField = document.querySelector('#inputField'); // Replace with your actual input field ID
    const submitButton = document.querySelector('#submitButton'); // Replace with your actual submit button ID
    const downloadButton = document.querySelector('#downloadButton'); // Replace with your actual download button ID

    // Debugging: Log the elements to make sure they are being selected
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
        // Check if the input is correct
        const expectedText = 'your-expected-text'; // Change to the text you expect

        // Debugging: Log the input value to check what the user enters
        console.log('Input value:', inputField.value);

        if (inputField.value === expectedText) {
            // Show the download button if the input is correct
            downloadButton.style.display = 'block';
        } else {
            // Optionally show an error message
            alert('Incorrect input!');
        }
    });
});
