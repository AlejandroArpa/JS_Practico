const menuEmail =document.querySelector('.navbar-email');
const desktopmenu =document.querySelector('.desktop-menu');
const burguerMenu=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const carritoicon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');
const cardsContainer=document.querySelector('.cards-container');

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

const productList=[];
productList.push({
    name:'bike',
    price:300,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 '
});
productList.push({
    name:'pantalla',
    price:900,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 '
});

// <!-- <section class="main-container">
//     <div class="cards-container">

//       <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>

//     </div>
//   </section> -->

function renderProduct(arr){
    for (product of arr){
        const ProductCard=document.createElement('div');
         ProductCard.classList.add('product-card');
        
        const imagen=document.createElement('img');
        imagen.setAttribute('src',product.image);
    
        const ProductInfo=document.createElement('div');
        ProductInfo.classList.add('product-info');
    
        const ProductInfoDiv=document.createElement('div');
    
        const ProductPrice=document.createElement('p');
        ProductPrice.innerText = '$'+product.price;
        const ProductName=document.createElement('p');
        ProductName.innerText = product.name;
    
        ProductInfoDiv.appendChild(ProductPrice);
        ProductInfoDiv.appendChild(ProductName);
    
    
    
        const ProductInfoFigure=document.createElement('figure');
        const ProductImgCard=document.createElement('img');
        ProductImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        ProductInfoFigure.appendChild(ProductImgCard);
    
        ProductInfo.appendChild(ProductInfoDiv);
        ProductInfo.appendChild(ProductInfoFigure);
    
        ProductCard.appendChild(imagen);
        ProductCard.appendChild(ProductInfo);
    
        cardsContainer.appendChild(ProductCard);
    
    
    }
}
renderProduct(productList);
