document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Please fill out both fields.");
    }
});
