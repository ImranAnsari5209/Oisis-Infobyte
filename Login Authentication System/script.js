// Get the login form and register button elements
const loginForm = document.getElementById('login-form');
const registerBtn = document.getElementById('register-btn');

// Create an object to store user data
const users = {};

// Function to register a new user
function registerUser(username, password) {
    // Check if the username already exists
    if (users[username]) {
        alert('Username already exists!');
        return;
    }

    // Create a new user object and store it in the users object
    users[username] = {
        password: password
    };

    // Save the users object to local storage
    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully!');
}

// Function to login a user
function loginUser(username, password) {
    // Check if the username exists
    if (!users[username]) {
        alert('Username does not exist!');
        return;
    }

    // Check if the password is correct
    if (users[username].password !== password) {
        alert('Incorrect password!');
        return;
    }

    // Login the user and redirect to dashboard page
    alert('Login successful!');
    window.location.href = 'dashboard.html';
}

// Add event listener to the register button
registerBtn.addEventListener('click', () => {
    // Get the username and password from the user
    const username = prompt('Enter a username:');
    const password = prompt('Enter a password:');

    // Register the user
    registerUser(username, password);
});

// Add event listener to the login form
loginForm.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Login the user
    loginUser(username, password);
});

// Load the users object from local storage
const storedUsers = localStorage


// Add event listener to the logout button
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {

    window.location.href = 'index.html';

    // Clear the users object from local storage
    localStorage.removeItem('users');

    // Redirect back to the login page
    
});