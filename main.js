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


const fname = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("phone");
const message = document.getElementById("message");

const submit = document.getElementsByClassName('contact')[0];

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Clicked");

  let ebody = `
    <b>Name: </b>${fname.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Phone No.: </b>${number.value}
    <br>
    <b>Message: </b>${message.value}
  `

  Email.send({
    SecureToken : "1110a92c-211f-47a1-9c33-a45076860785",
    To : 'segubananabridgete@gmail.com',
    From : "segubananabridgete@gmail.com",
    Subject : "New Inquiry from " + fname.value,
    Body : ebody
}).then(
  message => alert(message)
);
} )

// 1110a92c-211f-47a1-9c33-a45076860785