
setTimeout(function(){
    document.getElementById('hero-header').style.visibility="visible";
}, 1000)

/* style="visibility: hidden;" for the hero header */

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById("hamburger-button")
    const mobileMenu = document.querySelector(".mobile-menu")
    hamburgerButton.addEventListener("click", () => mobileMenu.classList.toggle('active'))
})








/* news page loading news from JSON file */


async function getNewsData () {
    const newsPromise = await fetch('data/news.json')
    const newsJSON = await newsPromise.json()

    const newsGrid = document.querySelector('.news-grid')
    //console.log(newsJSON)
    
    newsJSON.forEach(news => {
        let newsCard = document.createElement('div')
        newsCard.classList.add('card')

        newsCard.innerHTML = 
        `   <img src="images/${news.image}" alt="${news.title}">
            <h2 class=card-text text-l textcenter"> ${news.title}</h2>
            <p> ${news.content}</p>
            <p> <i class="fas fa-clock"></i> ${news.date}</p>
        `;
        newsGrid.appendChild(newsCard)
        
    })
    
    }


getNewsData()