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
