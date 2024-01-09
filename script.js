// script.js

let currentImageIndex = 0;
let images = [];

// Function to set images based on the current product
function setProductImages(productImages) {
    images = productImages;
    updateImage();
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    const productImage = document.getElementById("product-image");
    productImage.src = images[currentImageIndex];
}

// Additional functionalities or adjustments can be added as needed
