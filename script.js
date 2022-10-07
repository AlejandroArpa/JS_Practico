const menuEmail =document.querySelector('.navbar-email');
const desktopmenu =document.querySelector('.desktop-menu');
const burguerMenu=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const carritoicon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');
let elementos=[desktopmenu,aside,mobileMenu];

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
carritoicon.addEventListener('click',toggleCarritoAside);

function setInit(element){
    for (let i=0; i<elementos.length;i++){
        if(elementos[i]==element){
            elementos[i].classList.toggle('inactive');
        }
        else{
            elementos[i].classList.add('inactive');
        }
    }
}

function toggleDesktopMenu(){
    setInit(desktopmenu);   
}

function toggleMobileMenu(){
    setInit(mobileMenu); 
}

function toggleCarritoAside(){   
    setInit(aside); 
}