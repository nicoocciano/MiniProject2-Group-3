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





// JS for cart 
let cart = [
    {
        productName: '',
        productPrice: 0
    }
];

function buyNow(name,price){
    cart.push({ProductName:name,ProductPrice:price});
    localStorage.setItem("cart",JSON.stringify(cart));

};

cartStorage = JSON.parse(localStorage.getItem("cart"));
let container = document.getElementById("item");
function showCart(){
let totalAmmount = 0;
let itemNumber = 0;
cartStorage.forEach(function (cartItem) {
container.innerHTML += `

<div class="about1">
<p id="item-name">${cartItem.ProductName}</p>
<p id="item-price">${cartItem.ProductPrice}</p>
</div>`;
itemNumber++;


Removing Item from cart
function removeItem(itemNumber){
cart.splice(itemNumber,1);
localStorage.setItem("cart",JSON.stringify(cart));
container.innerHTML = "";
showcart();

}
