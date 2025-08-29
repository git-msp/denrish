let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let autoPlay = true;
let slideInterval;

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
}

function plusSlides(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides(slideIndex);
}

function startAutoPlay() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(slideInterval);
}

function goToQR() {
  stopAutoPlay();
  autoPlay = false;
  slideIndex = slides.length - 1;
  showSlides(slideIndex);
}

// Initial setup
showSlides(slideIndex);
startAutoPlay();

document.querySelector(".slideshow-container").addEventListener("click", () => {
  if (autoPlay) {
    stopAutoPlay();
    autoPlay = false;
  } else {
    startAutoPlay();
    autoPlay = true;
  }
});
