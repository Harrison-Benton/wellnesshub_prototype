document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate sending the message
    document.getElementById("formStatus").textContent = "Your message has been sent! We will get back to you shortly.";

    // Clear the form
    document.getElementById("contactForm").reset();
});
