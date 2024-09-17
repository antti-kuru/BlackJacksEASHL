
setTimeout(function(){
    document.getElementById('hero-header').style.visibility="visible";
}, 1000)

/* style="visibility: hidden;" for the hero header */

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById("hamburger-button")
    const mobileMenu = document.querySelector(".mobile-menu")
    hamburgerButton.addEventListener("click", () => mobileMenu.classList.toggle('active'))
})







/* Roster page loading players from JSON file */

async function getRosterData () {
    const rosterPromise = await fetch('data/players.json')
    const rosterJSON = await rosterPromise.json()

    const goalieGrid = document.querySelector(".goalie-grid")
    const defGrid = document.querySelector(".def-grid")
    const fwdGrid = document.querySelector(".fwd-grid")

    rosterJSON.forEach(player => {
        let playerCard = document.createElement('div')
        playerCard.classList.add('card')

        playerCard.innerHTML = ` <img src="images/${player.image}" alt="${player.name}">
        <h3 class="card-text text-xl text-center">#${player.number} <span class="text-primary">${player.psn} ${player.role}</span></h3>
        <p class="text-center"> ${player.name} <img id=nationality src="images/${player.nationality}" alt="nationality"></p>
        `
        if (player.position == "Goalie") {
            goalieGrid.appendChild(playerCard)
        } else if (player.position == "Defenseman") {
            defGrid.appendChild(playerCard)
        } else if (player.position == "Forward") {
            fwdGrid.appendChild(playerCard)
        } 
    })
}

getRosterData()



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