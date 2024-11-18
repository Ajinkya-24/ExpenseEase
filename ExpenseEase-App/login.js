// Toggle Password Visibility
const eyeIcon = document.getElementById('eye');
const passwordField = document.getElementById('pwd');

eyeIcon.addEventListener('click', () => {
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    eyeIcon.classList.toggle('fa-eye-slash');
});

// Handle Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the username and password
    const username = document.getElementById('txt-input').value;
    const password = document.getElementById('pwd').value;

    // Check if fields are not empty
    if (username && password) {
        // Store username in localStorage (you can change this to sessionStorage if needed)
        localStorage.setItem('username', username);

        // Redirect to the main page (index.html)
        window.location.href = 'index.html';  // Ensure index.html is the correct path
    } else {
        alert('Please enter both username and password!');
    }
});
