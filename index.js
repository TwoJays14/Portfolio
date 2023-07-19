'use strict';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const header = document.querySelector(".head");
const about = document.getElementById("about");
const wrapper = document.querySelector(".wrapper");
const projects = document.querySelector(".wrapper2");
const contact = document.getElementById("contact");
const contactSection = document.querySelector(".wrapper3");
const main = document.querySelector(".main-container");


const body = document.body
let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   navBar.classList.toggle("sticky", window.scrollY > 0);
//   navMenu.classList.remove("active", window.scrollY > 0);
// })

window.addEventListener("scroll", () => {
  const currentScroll = document.documentElement.scrollTop;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up")
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down"))  {
    body.classList.add("scroll-down")
  }


  if (currentScroll < lastScroll && body.classList.contains("scroll-down"))  {
    body.classList.remove("scroll-down")
  }

  lastScroll = currentScroll

})

window.addEventListener("scroll", () => {
  if (navMenu.classList.contains('active') && body.classList.contains('scroll-down')) {
    body.classList.remove("scroll-down");
  } 
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(nav => nav.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



// Prevent link default behavior
const scrollIntoView = document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


about.addEventListener("click", function() {
  console.log("I have clicked about")
  wrapper.scrollIntoView(true)
  stickyNav()
});

about.addEventListener("click", function() {
  wrapper.scrollIntoView(true)
})

contact.addEventListener("click", function() {
  contactSection.scrollIntoView(true)

});


