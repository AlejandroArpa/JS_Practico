const menuEmail =document.querySelector('.navbar-email');
const desktopmenu =document.querySelector('.desktop-menu');
const burguerMenu=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu(){
    desktopmenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}