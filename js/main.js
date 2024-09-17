
setTimeout(function(){
    document.getElementById('hero-header').style.visibility="visible";
}, 1000)

/* style="visibility: hidden;" for the hero header */

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById("hamburger-button")
    const mobileMenu = document.querySelector(".mobile-menu")
    hamburgerButton.addEventListener("click", () => mobileMenu.classList.toggle('active'))
})