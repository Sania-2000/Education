document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector('.hamburger');
  const navItems = document.querySelector('.navbar ul');
  const logo = document.querySelector('.logo img');
  const navItemsList = document.querySelectorAll('.navbar ul li');
  const btn = document.querySelectorAll('.navbar .btn');

  hamburgerMenu.addEventListener('click', () => {
    if (navItems.style.display === 'flex') {
      navItems.style.display = 'none';
      btn.forEach((button) => {
        button.style.display = 'none';
      });
    } else {
      navItems.style.display = 'flex';
      btn.forEach((button) => {
        button.style.display = 'block';
      });
    }
  });
});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
console.log("Viewport size: " + viewportWidth + " x " + viewportHeight);
