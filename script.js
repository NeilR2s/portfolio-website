const menuIcon = document.querySelector('.menu-icon'); 
const closeIcon = document.querySelector('.close-icon');
const navList = document.querySelector('nav ul');

if (menuIcon && navList) { 
    menuIcon.addEventListener('click', () => {
        navList.classList.add('active');
    });
}

if (closeIcon && navList) { 
    closeIcon.addEventListener('click', () => {
        navList.classList.remove('active');
    });
}

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only remove if the menu is actually active (on mobile view)
        if (navList.classList.contains('active')) {
             navList.classList.remove('active');
        }
    });
});