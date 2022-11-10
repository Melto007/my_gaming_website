const slider = document.querySelectorAll('.slider-div')
const sliderImg = document.querySelector('.slider-div img')
const sliderHeading = document.querySelector('.headingTag')
let index = 0

let imageArray = [
    {
        id: 1,
        img: './files/images/MRSH_CursaBattleAW16x9_StoryPulsepoint_290922_6PM_CEST_EN-bf13.webp',
        name: 'Super Mario'
    },{
        id: 2,
        img: './files/images/1060.webp',
        name: 'Mini Craft'
    },{
        id: 3,
        img: './files/images/top25modernpcgames-blogroll-1663951042311.jpg',
        name: 'God Of War'
    },
]

function sliderFunction() {
    setInterval(() => {
        sliderImg.src = imageArray[index].img
        sliderHeading.innerText = imageArray[index].name
        index++

        if(index === imageArray.length) {
            index = 0
        }
    }, 4000)
}

window.addEventListener('load', sliderFunction)

// const sliderContainer = document.querySelector('#sliderContainer')
// const sliders = document.querySelector('#slider')
// const cards = sliders.getElementsByTagName('li')

// let sliderContainerWidth = sliderContainer.clientWidth
// let elementsToshow = 4
// console.log(sliderContainerWidth)
// let cardWidth = sliderContainerWidth / elementsToshow
// sliders.style.width = cards.length*cardWidth+'px'

// for(let index = 0; index < cards.length; index++) {
//     let element = cards[index]
//     element.style.width = cardWidth+'px'
// }


const games = [
    {
        id: 1,
        img: './files/images/EGS_DeadbyDaylightUltimateEdition_BehaviourInteractive_Editions_S2_1200x1600-b5a49c3ef5e28ebd3fca3608cc599736.jpg',
        name: 'Dead By DayLights',
        rating: 4.5
    },{
        id: 2,
        img: './files/images/bf4-keyart.jpg.adapt.crop1x1.767p.jpg',
        name: 'Call of Duty',
        rating: 4
    },{
        id: 3,
        img: './files/images/Build-Game-Watch-It-Die-Hyper-Scape-Games.webp',
        name: 'Cyber Hunt',
        rating: 3.5
    },{
        id: 4,
        img: './files/images/video-games-god-of-war-artwork-god-of-war-iii-wallpaper-preview.jpg',
        name: 'God of Wars',
        rating: 4
    },{
        id: 5,
        img: './files/images/67e5ab748c734afba697b6272eab21f7ifp1.webp',
        name: 'Gravity Recharged',
        rating: 4
    },{
        id: 6,
        img: './files/images/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
        name: 'Battle Field 2044',
        rating: 4
    },{
        id: 7,
        img: './files/images/r6-extraction.webp',
        name: 'RainBow Six',
        rating: 3.5
    },{
        id: 8,
        img: './files/images/apps.43891.13835473807186336.5cf6bf6e-e12d-494f-a7ea-420b2c6b1a23.jpg',
        name: 'Call of Duty Pacific',
        rating: 4
    },{
        id: 9,
        img: './files/images/512x512bb.jpg',
        name: 'Apex Legends',
        rating: 4
    },{
        id: 10,
        img: './files/images/7NjUGP06Yf64Mn0jSZ6GFvgE.jpg',
        name: 'Gotham Nights',
        rating: 4
    },{
        id: 11,
        img: './files/images/Games_Subnav_Minecraft-300x465.jpg',
        name: 'Mine Craft',
        rating: 4
    },{
        id: 12,
        img: './files/images/3800.webp',
        name: 'Super Mario Bros',
        rating: 3.5
    }
]

const cardsContainer = document.querySelector('.cards-container')
const leftHandler = document.querySelector('.leftHandler')
const rightHandler = document.querySelector('.rightHandler')
const progressbar = document.querySelectorAll('.progress-Bars')

function handleChange(e, handler) {
    const handle = e.target
    const slider = handle.closest(".top-container").querySelector(".cards-container")
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))

    const progressBar = document.querySelector('.progress-Bars')
    const progressBarCount = progressBar.children.length
   
    if(handler === 'leftHandler') {
        if(sliderIndex - 1 < 0) {
            slider.style.setProperty('--slider-index', progressBarCount - 1)
            progressBar.children[sliderIndex].classList.remove('actives')
            progressBar.children[progressBarCount - 1].classList.add('actives')
        }else {
            slider.style.setProperty('--slider-index', sliderIndex - 1)
            progressBar.children[sliderIndex].classList.remove('actives')
            progressBar.children[sliderIndex - 1].classList.add('actives')
        }
    }

    if(handler === 'rightHandler') {
        if(sliderIndex + 1 >= progressBarCount) {
            slider.style.setProperty('--slider-index', 0)
            progressBar.children[sliderIndex].classList.remove('actives')
            progressBar.children[0].classList.add('actives')
        } else {
            slider.style.setProperty('--slider-index', sliderIndex + 1)
            progressBar.children[sliderIndex].classList.remove('actives')
            progressBar.children[sliderIndex + 1].classList.add('actives')
        }
    }
}

leftHandler.addEventListener('click', function(e) {
    handleChange(e, "leftHandler")
})

rightHandler.addEventListener('click', function(e) {
    handleChange(e, "rightHandler")
})

progressbar.forEach(progress => {
    const slider = document.querySelector(".cards-container")
    const itemsCount = games.length
    const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue('--cards-per-screen'))
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))
    
    const progressBars = Math.ceil(itemsCount / itemsPerScreen)

    for(let index = 0; index < progressBars; ++index) {
        let html = `<li class="progress-bar bg-gray-500 tab-s1:h-[0.3rem] rounded-lg"></li>`
        let barItem = document.createElement('li')
        barItem.innerHTML += html

        if(index === sliderIndex) {
            barItem.classList.add('actives')
        }

        progress.append(barItem)
    }
})

function createCards() {
    let htmlElement
    games.forEach((game,index) => {
        htmlElement = `<div class="cards text-black bg-white text-center rounded-lg pb-[.7rem] tab-s1:h-[80%]">
                            <img src=${game.img} alt="games image" class="image_element p-[.2rem] w-full h-[60%] rounded-md">
                            <h3 class="headingTag text-[.8rem] mt-[.2rem] mb-[.2rem] text-bold tab-s1:mt-[1rem] tab-s1:text-[1.1rem]">${game.name}</h3>
                            <ul class="flex justify-center text-[.8rem] mt-[.2rem] mb-[.2rem] tab-s1:text-[1.1rem]">
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-regular fa-star"></i></li>
                                <li><i class="fa-regular fa-star"></i></li>
                            </ul>
                            <button class="bg-black text-white px-[0.7rem] py-[.3rem] rounded-lg mt-[0.8rem] mb-[0.2rem]">order</button>
                        </div>`
        cardsContainer.innerHTML += htmlElement
    })
}
window.addEventListener('load', createCards)