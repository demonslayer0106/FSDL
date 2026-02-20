document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // Name Validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }

    // Email Validation (Regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter valid email";
        isValid = false;
    }

    // Password Validation
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Mobile Validation
    if (isNaN(mobile) || mobile.length !== 10) {
        document.getElementById("mobileError").textContent = "Enter valid 10-digit number";
        isValid = false;
    }

    // Final Check
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }

});