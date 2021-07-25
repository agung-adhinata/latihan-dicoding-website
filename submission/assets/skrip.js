"use strict"

const navbarToggle =document.getElementById("hamburgerBtn");
const navList = document.getElementById("navList");
const body = document.getElementsByName("body");

navbarToggle.addEventListener("click", function(){
  console.log("get it")
  navList.classList.toggle("visible")
})


//ingat, window.innerWidth != ukuran layar hp, innerwidth merujuk pada ukuran viewport.
// footnote siapa tahu lupa : https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
navList.addEventListener("click", function(){
  if(window.innerWidth <=512) {
    navList.classList.toggle("visible")
  }
})