// window.addEventListener("load", function () {
//   document.body.classList.add("loaded");
// });

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Master Every Turn with Maneuver Driving School"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: [
      "We provide expert driving lessons with personalized training at unbeatable value!",
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: false,
  });
  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // animation on scroll
  AOS.init();
});
/*-----------------close nav when clicking on a  nav item------------*/
document.addEventListener("click", function (e) {
  if (e.target.closest(".menu")) {
    toggleNav();
  }
});
// hash remover from tab

document.addEventListener("DOMContentLoaded", () => {
  // Detect hash changes
  window.addEventListener("hashchange", () => {
    // Use history.replaceState to remove the hash from the URL
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  });

  // Optionally remove the hash when the page loads
  if (window.location.hash) {
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  }
});

//car animate
const car = document.querySelector(".car");
let targetY = 0;
let currentY = 0;

window.addEventListener("scroll", () => {
  // Negative so it moves upward as you scroll down
  targetY = -(window.scrollY * 0.8); // adjust speed here
});

function animate() {
  currentY += (targetY - currentY) * 0.1; // smooth easing
  car.style.transform = `rotate(0deg) translateY(${currentY}px)`;
  requestAnimationFrame(animate);
}

animate();
