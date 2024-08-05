// Show/Hide Sidebar
const showSidebar = document.getElementById('showsidebar');
const hideSidebar = document.getElementById('hidesidebar');
const mySideBar = document.getElementById('mysidebar');
const sideBar = document.querySelector('.sidebar');
const nav = document.querySelector('nav');

showSidebar.addEventListener('click', showSidebarBtn);
function showSidebarBtn() {
    mySideBar.style.width = '250px';
    mySideBar.style.display = 'flex';
}

hideSidebar.addEventListener('click', hideSidebarBtn);
function hideSidebarBtn() {
    mySideBar.style.width = '0';
    mySideBar.style.display = 'none';
}


// Newsletter
const signup = document.getElementById('signup');
const email = document.getElementById('email-input');
const signupButton = document.getElementById('signupbutton');

// Listen for the form's submit event
signup.addEventListener('submit', (event) => {
    event.preventDefault();
    signupBtn();
});

function signupBtn() {
    if (email.value === "") {
        alert('Please enter email');
    } else {
        alert('You have successfully signed up!');
    }
}


// checkbox.addEventListener('click', hidePassword);

// function hidePassword() {
//     if (password.type === "password") {
//         password.type = "text";
//     } else {
//         password.type = 'password';
//     }
// }