const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInForm = document.querySelector('.form-wrapper.sign-in form');
const signUpForm = document.querySelector('.form-wrapper.sign-up form');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Replace the following lines with your actual authentication logic
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Example: Check if username and password are valid
    if (isValidCredentials(username, password)) {
        // Authentication successful, redirect to home.html
        redirectToHome();
    } else {
        // Authentication failed, display an error message or take appropriate action
        alert('Invalid credentials. Please try again.');
    }
});

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Replace the following lines with your actual sign-up logic
    const newUsername = this.querySelector('input[type="text"]').value;
    const newPassword = this.querySelector('input[type="password"]').value;

    // Example: Register the new user
    registerUser(newUsername, newPassword);

    // Once signed up, redirect to home.html
    redirectToHome();
});

// Placeholder functions, replace with your actual logic
function isValidCredentials(username, password) {
    // Implement your authentication logic here
    // Return true if credentials are valid, false otherwise
    return true;
}

function registerUser(username, password) {
    // Implement your user registration logic here
    // Add the new user to your database or perform necessary actions
}

function redirectToHome() {
    // Redirect to home.html
    window.location.href = 'home.html';
}