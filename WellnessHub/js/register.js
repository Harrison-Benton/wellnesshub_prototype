document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from reloading

    // Show the success message
    document.getElementById("successMessage").style.display = "block";

    // Optionally, clear the form fields
    document.getElementById("registerForm").reset();
});
