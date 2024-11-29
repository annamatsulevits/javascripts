window.onload = function() {
    const userInputField = document.getElementById('userInput'); // Input field ID
    const submitButton = document.getElementById('submitButton'); // Submit button ID
    const downloadButton = document.getElementById('downloadButton'); // Download button ID

    downloadButton.style.display = "none"; // Initially hide the button

    const correctAnswer = "mypassword"; // Replace with your correct input

    submitButton.addEventListener('click', function() {
        const userInput = userInputField.value; // Get the value entered by the user

        if (userInput === correctAnswer) {
            downloadButton.style.display = "block"; // Show download button if correct
            alert("Correct! You can now download the PNG.");
        } else {
            alert("Incorrect input. Please try again.");
        }
    });
};

console.log("JavaScript loaded successfully!");
