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

// Gallery slide
const gallery = document.querySelectorAll('.gallery');
const dots = document.querySelectorAll('.dots');

let slideIndex = 1;
showSlides(slideIndex);

function buttons(n) {
    showSlides(slideIndex += n);
}

function currentImage(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > gallery.length) {slideIndex = 1}
    if (n < 1) {slideIndex = gallery.length}
    for (i = 0; i < gallery.length; i++) {
        gallery[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    gallery[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

