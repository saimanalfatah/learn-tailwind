new WOW().init();
// navbar toggle mobile
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', function(e) {
  const navbarCollapse = document.getElementById("navbar-collapse");

  navbarCollapse.classList.toggle("slide-down");

  if (navbarCollapse.classList.contains("slide-down")) {
    navbarCollapse.classList.remove("slide-up");
  } else {
    navbarCollapse.classList.add("slide-up");
  }
  this.querySelector("svg > path:nth-of-type(1)").classList.toggle("opacity-0");
  this.querySelector("svg > path:nth-of-type(2)").classList.toggle("opacity-0");
});

// parallax hero
window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".hero");
  // You can adjust the 0.4 to change the speed
  var coords = (scrolled * 0.4) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';
};



// scroll navbar
const myNav = document.getElementById('mynav');
const brandScroll = document.querySelector(".brand-scroll");
const btnGithub = document.querySelector('.btn-github');
const navLinks = document.querySelectorAll(".nav-link");
const sectionLinks = document.querySelectorAll('.section-link');

window.onscroll = function () { 
  "use strict";
  if (document.body.scrollTop >= 64 || document.documentElement.scrollTop >= 64) {
     myNav.classList.remove("md:bg-transparent", "md:shadow-none");
     brandScroll.classList.remove("md:text-gray-100");
     btnGithub.classList.remove("md:bg-gray-800","md:hover:bg-gray-900","md:focus:shadow-none");

     [].forEach.call(navLinks, function(el) {
        el.classList.remove("md:text-gray-200","md:hover:text-white");
     });
  } 
  else {
     myNav.classList.add("md:bg-transparent", "md:shadow-none");
     brandScroll.classList.add("md:text-gray-100");
     btnGithub.classList.add("md:bg-gray-800","md:hover:bg-gray-900", "md:focus:shadow-none");

     [].forEach.call(navLinks, function(el) {
        el.classList.add("md:text-gray-200","md:hover:text-white");
     });
  }

  // link active
  const scrollPos = document.documentElement.scrollTop || document.body.scrollTop ;
  for (let s in sectionLinks)
    if (sectionLinks.hasOwnProperty(s) && sectionLinks[s].offsetTop - 64 <= scrollPos) {
      const id = sectionLinks[s].id;
      document.getElementsByClassName("active")[0].classList.remove("active");
      document.querySelector(`#navbar-collapse a[href*=${id}]`).classList.add("active");
    } 
};

// click nav link scroll
for (const navLink of navLinks) {
  navLink.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 64;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}