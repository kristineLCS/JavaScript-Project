const signup = document.getElementById('signup');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const signupButton = document.getElementById('signupbutton');
const checkbox = document.getElementById('passcheckbox');


signupButton.addEventListener('click', signupBtn);

function signupBtn() {
    if (email.value === ''  || password.value  === '') {
        alert('Please enter email and password');
    } else {
        alert('You have successfully signed up!');
    }
    
}

checkbox.addEventListener('click', hidePassword);

function hidePassword() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = 'password';
    }
}