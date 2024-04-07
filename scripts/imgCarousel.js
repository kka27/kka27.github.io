// get all images in .carousel class
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

// Show image to display on screen
function showImage(index) {
    images.forEach((img, idx) => {
        if (idx === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

// Increment index when clicking next button
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Decrement index when clicking back button
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Event listeners on button clicks
document.querySelector('.next-button').addEventListener('click', nextImage);
document.querySelector('.prev-button').addEventListener('click', prevImage);

// Default start on first image
showImage(currentIndex);