let cards = Array.from(document.querySelectorAll(".memory-cards"));
let isFlipped = false;
let lockBoard = false;
let firstGuess, secondGuess;
let time = 10;
let moves = 0;
let count = 0;
let delay = 1200;
let previousTarget = null;
let counter = setInterval(timer, 1000);

//TODO crate start game function that will remove overlay text when game start
function startGame() {
    let overlays = [...document.getElementsByClassName("overlay-text")];
    overlays.forEach((overlay) => {
        overlay.addEventListener("click", function () {
            overlay.classList.remove("visible");
        });
    });
}

startGame();
// //NOTE: shuffle card
function shuffleCards() {
    window.addEventListener("load", (event) => {
        cards.forEach((card) => {
            let shuffle = Math.floor(Math.random() * 17);
            card.style.order = shuffle;
        });
    });
}
cards.forEach((card) => card.addEventListener("click", flipCard));
shuffleCards();

//TODO crate Countdown function that ticking down from 100 seconds to 0 if the timer at 0 then display game over overlay
// function timer() {

// }
//TODO create count move function to count how many move user clicked on the card and if all card matches before the time run out than display victory overlay text
function flipCard() {
    let clicked = event.target;

    if (
        clicked === previousTarget ||
        clicked.classList.contains('flip') ||
        clicked.classList.contains('match')
    ) {
        return
    }
    if (count < 2) {
        count++;
    }
    if (count === 1) {
        firstGuess = clicked.dataset.name;
        console.log(firstGuess)
        clicked.classList.add('flip')
    } else {
        secondGuess = clicked.dataset.name;
        console.log(secondGuess);
        clicked.classList.add("flip");
    }

    if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
            setTimeout(checkForMatch(), 1500)
            isFlipped = true
        }
        setTimeout(resetGuesses, delay)
    }
    isFlipped = true
    countMove();
    timer();
}


//TODO match card and check if card matches
function checkForMatch() {
    let match = document.querySelectorAll('.flip');
    match.forEach((card) => {
        card.classList.add('match');
    })
    // let match = firstGuess.dataset.name === secondGuess.dataset.name;
    // match ?  disableCard() : unMatchCard() 
}

//TODO if card is not matching than remove 'flip' class
const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    time = 100;
    moves = 0
    isFlipped = false

    let selected = document.querySelectorAll(".flip");
    selected.forEach((card) => {
        card.classList.remove("flip");
    });
};


function timer() {
    time--;

    // if (time <= 0 || time === 0) {
    //     clearInterval(countdown);
    //     document.querySelectorAll("overlay-text").classList.add("visible");
    // }
    // resetGuesses()
    // document.getElementById("timer").innerHTML = time;
}

function countMove() {
    moves++;
    document.getElementById('flips').innerHTML = moves;
  
}

