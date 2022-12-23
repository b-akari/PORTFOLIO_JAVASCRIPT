// hamburger = document.querySelector(".hamburger");
// hamburger.onclick = function(){
//     navBar = document.querySelector(".nav-bar");
//     navBar.classList.toggle("active");
// }

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');
const content = document.querySelector(".nav-bar ul");

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

// content.addEventListener("click", () => {
//     navBar.classList.toggle("hide");
// })