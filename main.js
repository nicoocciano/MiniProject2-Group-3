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


// JS for Pet Categories




// Sidebar Cart
let cartBtn = document.querySelector('.cart');
let cartSidebar = document.querySelector('.cart-sidebar');
let closeIcon = document.querySelector('.close-icon');
let cartCount = document.querySelector('.cartCount');


    
cartBtn.onclick = function () {
    cartSidebar.style.right = "0";
}

closeIcon.onclick = function () {
    cartSidebar.style.right = "-400px";
}

let cart = [
    {
        productName: "",
        productPrice: "",
    }
];
function addToCart(name, price) {
    cart.push({productName: name, productPrice: price});
    localStorage.setItem("cartStorage", JSON.stringify(cart));
};

let cartStorages = JSON.parse(localStorage.getItem("cartStorage"));
let cartContainer = document.getElementById("item");

function showCart() {
    let totalAmmount = 0;
    let itemNumber = 0;
    
    cartStorages.forEach(function (cartItem) {
        cartContainer.innerHTML += `

        <div class="cartCon1>
        <p id="description">${cartItem.productName}</p>
        <p id="price">${cartItem.productPrice}</p>
        button class="crt-btn" onclick="removeItem()">Remove</button>
        `;
        itemNumber++;
    });

}

function removeItem(itemNumber) {
    cartStorages.splice(itemNumber, 1);
    localStorage.setItem("cartStorage", JSON.stringify(cartStorages));
    cartContainer.innerHTML = "";
    showCart();
    
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


