<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input field and the button
    const userInput = document.querySelector('#userInput'); // Change '#inputField' to your actual input ID
    const submitButton = document.querySelector('#submitButton'); // Change '#submitButton' to your actual button ID
    const downloadButton = document.querySelector('#downloadButton'); // Change '#downloadButton' to your actual download button ID

    // Hide the download button initially
    downloadButton.style.display = 'none';

    // Add event listener to the submit button
    submitButton.addEventListener('click', function() {
        // Check if the input is correct
        if (userInput.value === 'your-expected-text') {
            // Show the download button if the text is correct
            downloadButton.style.display = 'block';
        } else {
            // Optionally, show an error message if the text is incorrect
            alert('Incorrect text input!');
        }
    });
});
</script>


console.log("JavaScript loaded successfully!");
