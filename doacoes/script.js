let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + slideIndex + "00%)";
  }
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

showSlide();