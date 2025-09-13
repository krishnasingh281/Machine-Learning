document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Reset error messages
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validation checks
        let isValid = true;

        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        }

        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'Password is required';
            isValid = false;
        }

        if (isValid) {
            // Simulate successful login (replace with actual login logic)
            alert('Login successful!');
            loginForm.reset(); // Clear the form
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});