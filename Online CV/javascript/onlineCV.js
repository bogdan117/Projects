
function refreshPage() {
    window.location.reload();
}

let mybutton = document.querySelector("#myBtn");

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

window.onscroll = function () { scrollFunction() };

const toggle = document.getElementById("toggleDark") ; 
const background = document.querySelector(".black-background");

toggle.addEventListener("click", function() {
    this.classList.toggle("bi-moon-fill");
    if(this.classList.toggle("bi-brightness-high-fill")) {
        background.style.color = "black";
        background.style.transition = "2s";
    } else {
        background.style.color = "white";
        background.style.transition = "2s"
    }
})

function darkMode() {
    const background = document.querySelector(".black-background");
    const header = document.querySelector(".header-section");
    background.classList.toggle("dark-mode");
    background.style.transition = "2s";
    header.classList.toggle("dark-mode");
  }

