let cards = document.getElementsByClassName('memory-cads');
let flip = document.getElementById('flip');
let timer = document.getElementById('timer');
let incrementClick = 0;


class Timer {
    constructor(totalTime, cards) {
        this.cards = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('timer');
        this.ticker = document.getElementById('flip');
    }
    startGame() {
        this.cardToCheck = null;
        this.totalClick = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }
}

function flipCard() {
    this.classList.toggle('flip');
    cards.forEach(card => card.addEventListener('click', flipCard));
    cards.addEventListener('click', alert('You click me'));
        
    // cards.onclick = function() {
    //     incrementClick += 1;
    //     flip.innerHTML = incrementClick;
    //    }
}



let today = new Date();
const minute = today.minute();