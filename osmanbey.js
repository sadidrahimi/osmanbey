const gallery = document.querySelector('.gallery');
const galleryImages = gallery.querySelectorAll('img');
let currentImageIndex = 0;

function showNextImage() {
  galleryImages[currentImageIndex].style.display = 'none';
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  galleryImages[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 3000);
