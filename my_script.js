// Function to validate the login form
function validate_form() {
    // Get the values of username and password from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if both username and password are empty
    if (username.trim() === '' && password.trim() === '') {
        alert('Please enter username and password.');
    }
    // Check if only the username is empty
    else if (username.trim() === '') {
        alert('Please enter username.');
    }
    // Check if only the password is empty
    else if (password.trim() === '') {
        alert('Please enter password.');
    }
    // If both username and password are non-empty, consider the login successful
    else {
        alert('Login successful!');
    }
}
