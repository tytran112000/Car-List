import {cars} from './data.js'

const cardHolder = document.getElementById("card-holder")
const sedanBtn =document.getElementById("sedan")
const suvBtn = document.getElementById("suv")
const truckBtn = document.getElementById("truck")
const searchInput = document.getElementById("search-input")

let clickCount = 0;

// When user type in the search bar, the page automatically give out the car that is related to the search term
searchInput.addEventListener("input", function(){
    const searchQuery = searchInput.value.toLowerCase();
    const searchQueryFiltered = cars.filter(car => car.name.toLowerCase().includes(searchQuery));
    let cardsHtml = "";
    searchQueryFiltered.forEach(function(car){
        cardsHtml +=`
                        <div class="card border-0 col-xs-1 col-md-4 col-xl-1 mx-1 my-2 " style="width: 18rem; height: 15rem">
                            <img src="${car.thumbnail}" class="bg-image card-img-top" style="height: 100%" alt="...">
                            <div class="card-body">
                                <p class="card-text">${car.name}</p>
                                <p class="card-text">${car.make}</p>
                            </div>
                            <div class="card-price">
                                <p class="card-text">${car.price}</p>
                            </div>
                        </div>
                    `
    })
    return cardHolder.innerHTML =cardsHtml
})
// when user click on the sedan button, filter out cars which are sedans
sedanBtn.addEventListener("click", function(){
    clickCount ++
    if (clickCount === 1){
        suvBtn.classList.add("disabled");
        truckBtn.classList.add("disabled");
        let cardsHtml = "";
        const sedanOnly = cars.filter(car => car.carType === "Sedan")
        sedanBtn.innerHTML = `<span class="badge rounded-pill bg-success text-light px-3 py-2" style="font-size: 1em" id="sedan">Sedans</span>`
        cardHolder.innerHTML = "";
        sedanOnly.forEach(function(sedan){
        cardsHtml +=`
                        <div class="card border-0 col-xs-6 col-md-4 col-xl-1 mx-1 my-2 " style="width: 18rem; height: 15rem">
                            <img src="${sedan.thumbnail}" class="bg-image card-img-top" style="height: 100%" alt="...">
                            <div class="rank-heart-container d-flex justify-content-between mx-3">
                                <div class="card-rank">
                                    <p class="card-text">${sedan.rankInCategory}.</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">${sedan.name}</p>
                                <p class="card-text">${sedan.make}</p>
                            </div>
                            <div class="card-price">
                                <p class="card-text">${sedan.price}</p>
                            </div>
                        </div>
                    `
        
        })
        return cardHolder.innerHTML = cardsHtml 
    } else {
        suvBtn.classList.remove("disabled");
        truckBtn.classList.remove("disabled");
        sedanBtn.innerHTML = `<span class="badge rounded-pill  text-secondary" style="font-size: 1em" id="sedan">Sedans</span>`
        renderAllCards()
        clickCount = 0
    }
    
})
// When user click on the SUV button, filter out cars which are SUVs
suvBtn.addEventListener("click", function(){
    clickCount ++
    if (clickCount === 1){
        sedanBtn.classList.add("disabled");
        truckBtn.classList.add("disabled");
        let cardsHtml = "";
        const suvOnly = cars.filter(car => car.carType === "SUV")
        suvBtn.innerHTML = `<span class="badge rounded-pill bg-success text-light px-3 py-2" style="font-size: 1em" id="suv">SUVs</span>`
        cardHolder.innerHTML = "";
        suvOnly.forEach(function(suv){
        cardsHtml +=`
                        <div class="card border-0 col-xs-1 col-md-4 col-xl-1 mx-1 my-2 " style="width: 18rem; height: 15rem">
                            <img src="${suv.thumbnail}" class="bg-image card-img-top" style="height: 100%" alt="...">
                            <div class="rank-heart-container d-flex justify-content-between mx-3">
                                <div class="card-rank">
                                    <p class="card-text">${suv.rankInCategory}.</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">${suv.name}</p>
                                <p class="card-text">${suv.make}</p>
                            </div>
                            <div class="card-price">
                                <p class="card-text">${suv.price}</p>
                            </div>
                        </div>
                    `
        
        })
        return cardHolder.innerHTML = cardsHtml 
    } else {
        sedanBtn.classList.remove("disabled");
        truckBtn.classList.remove("disabled");
        suvBtn.innerHTML = `<span class="badge rounded-pill  text-secondary" style="font-size: 1em" id="suv">SUVs</span>`
        renderAllCards()
        clickCount = 0
    }
    
})
// When user click on the truck button, filter out cars which are trucks
truckBtn.addEventListener("click", function(){
    clickCount ++
    if (clickCount === 1){
        sedanBtn.classList.add("disabled");
        suvBtn.classList.add("disabled");
        let cardsHtml = "";
        const truckOnly = cars.filter(car => car.carType === "Truck")
        truckBtn.innerHTML = `<span class="badge rounded-pill bg-success text-light px-3 py-2" style="font-size: 1em" id="truck">Trucks</span>`
        cardHolder.innerHTML = "";
        truckOnly.forEach(function(truck){
        cardsHtml +=`
                        <div class="card border-0 col-xs-1 col-md-4 col-xl-1 mx-1 my-2 " style="width: 18rem; height: 15rem">
                            <img src="${truck.thumbnail}" class="bg-image card-img-top" style="height: 100%" alt="...">
                            <div class="rank-heart-container d-flex justify-content-between mx-3">
                                <div class="card-rank">
                                    <p class="card-text">${truck.rankInCategory}.</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">${truck.name}</p>
                                <p class="card-text">${truck.make}</p>
                            </div>
                            <div class="card-price">
                                <p class="card-text">${truck.price}</p>
                            </div>
                        </div>
                    `
        
        })
        return cardHolder.innerHTML = cardsHtml 
    } else {
        sedanBtn.classList.remove("disabled");
        suvBtn.classList.remove("disabled");
        truckBtn.innerHTML = `<span class="badge rounded-pill  text-secondary" style="font-size: 1em" id="truck">Trucks</span>`
        renderAllCards()
        clickCount = 0
    }
    
})
// When user land on the page it renders all the cards out
function getAllCards(){
    let cardsHtml = "";
    cars.forEach(function(card) {
        let likeIconClass = ""
        if(card.isLiked){
            likeIconClass = "liked"
        }
        cardsHtml +=`
                        <div class="card border-0 col-xs-1 col-md-4 col-xl-2 mx-auto my-2" style="width: 18rem; height: 15rem; object-fit: cover" >
                            <img src="${card.thumbnail}" class="bg-image card-img-top" id="bg-img" style="height: 100%"  data-unique="${card.uuid}" alt="...">
                            <div class="rank-heart-container d-flex justify-content-between mx-3">
                                <div class="card-rank">
                                    <p class="card-text">${card.rankOverall}.</p>
                                </div>
                                <div class="card-btn">
                                    <i class="fa-regular fa-heart ${likeIconClass}" id="like-btn" data-like="${card.uuid}"></i>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">${card.name}</p>
                                <p class="card-text">${card.make}</p>
                            </div>
                            <div class="card-price">
                                <p class="card-text">${card.price}</p>
                            </div>
                        </div>
                    `
    });
    return cardsHtml 
}
function renderAllCards(){
    cardHolder.innerHTML = getAllCards()
}
renderAllCards()

// when the heart button is click, the heart btn change color
document.addEventListener("click", function(e){
    if (e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})

function handleLikeClick(cardId){
    const targetCardObj = cars.filter(function(car){
        return car.uuid === cardId;
    })[0]
    targetCardObj.isLiked = !targetCardObj.isLiked
    renderAllCards()
}

// when user hover on top of a card, card will reveal the score for the 5 factors
