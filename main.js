// JS for Shop Page
let image = Array.from(document.getElementsByClassName("imageChoice"));
let mainImage = document.getElementById("mainImage");

function showImage(event) {
    let images = event.target
    mainImage.src = images.src;
}

image.forEach(function (images) {
    images.addEventListener("click", showImage)
    
});
// End of shop page


// Sidebar Cart
let cartBtn = document.querySelector('.cart');
let cartSidebar = document.querySelector('.cart-sidebar');
let closeIcon = document.querySelector('.close-icon');
let cartCount = document.querySelector('.cartCount');
let cartNotification = document.querySelector('.notification');
let cartItems = [];
let totalPrice = 0;
    
cartBtn.onclick = function () {
    cartSidebar.style.right = "0";
}

closeIcon.onclick = function () {
    cartSidebar.style.right = "-400px";
}

function addToCart(itemName, itemPrice, imageUrl) {
    cartItems.push({name: itemName, price: itemPrice});
    cartCount.textContent = cartItems.length;
    cartNotification.textContent = cartItems.length;

    
    let cartBody = document.querySelector('.cart-body');
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    let itemImageElement = document.createElement('img');
    itemImageElement.setAttribute('src', imageUrl);
    itemImageElement.setAttribute('width', '100');
    itemImageElement.setAttribute('height', '100');
    itemImageElement.classList.add('item-image');

    let itemNameElement = document.createElement('h5');
    itemNameElement.textContent = itemName;

    let itemPriceElement = document.createElement('h5');
    itemPriceElement.classList.add('text-success');
    itemPriceElement.textContent = itemPrice;

    cartItem.appendChild(itemImageElement);
    cartItem.appendChild(itemNameElement);
    cartItem.appendChild(itemPriceElement);
    
    cartBody.appendChild(cartItem);
}

cartBtn.addEventListener('click', function () {
    cartSidebar.style.right = "0";
    
});

closeIcon.addEventListener('click', function () {
    cartSidebar.style.right = "-400px";
});


function checkoutCart() {
  let cartBody = document.querySelector('.cart-body');
  cartBody.innerHTML = '';

  cartItems.forEach(item => {
    let cartItem = document.createElement('shop');
    cartItem.classList.add('cart-item');

    let img = document.createElement('div');
    img.classList.add('img');
    img.innerHTML = img.src;

    let carttxt = document.createElement('div');
    carttxt.classList.add('carttxt');
    carttxt.innerHTML = `
        <span>1x</span>
        <h5>${item.name}</h5>
        <h5 class="text-success">${item.price}</h5>
    `;

    cartItem.appendChild(img);
    cartItem.appendChild(carttxt);
    cartBody.appendChild(cartItem);
  });

  let cartTotal = document.querySelector('.cart-total');
  cartTotal.textContent = `${totalPrice.toFixed(2)}`;

  let checkoutBtn = document.createElement('button');
  checkoutBtn.classList.add('checkout-btn');
  checkoutBtn.textContent = 'Checkout';
  cartBody.appendChild(checkoutBtn);

  checkoutBtn.addEventListener('click', function () {
    alert(`Total price: ${totalPrice.toFixed(2)}`);
    cartItems = [];
    totalPrice = 0;
    cartCount.textContent = '0';
    checkoutCart();
  });
}

























// let cart = [
//     {
//         productName: '',
//         productPrice: 0
//     }
// ];

// function buyNow(name,price){
//     cart.push({ProductName:name,ProductPrice:price});
//     localStorage.setItem("cart",JSON.stringify(cart));

// };

// cartStorage = JSON.parse(localStorage.getItem("cart"));
// let container = document.getElementById("item");
// function showCart(){
// let totalAmmount = 0;
// let itemNumber = 0;
// cartStorage.forEach(function (cartItem) {
// container.innerHTML += `

// <div class="about1">
// <p id="item-name">${cartItem.ProductName}</p>
// <p id="item-price">${cartItem.ProductPrice}</p>
// </div>`;
// itemNumber++;


// RemovingItem from cart
// function removeItem(itemNumber){
// cart.splice(itemNumber,1);
// localStorage.setItem("cart",JSON.stringify(cart));
// container.innerHTML = "";
// showcart();

// });


