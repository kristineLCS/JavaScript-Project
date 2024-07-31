const login = document.getElementById('login');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const loginButton = document.getElementById('loginbutton');


loginButton.addEventListener('click', loginBtn);

function loginBtn() {
    if (email.value === ''  || password.value  === '') {
        alert('Please enter email and password');
    } else {
        alert('You have successfully logged in!');
    }
    
}
