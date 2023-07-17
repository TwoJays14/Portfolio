'use strict';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const header = document.querySelector(".head");

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

