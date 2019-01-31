let cards = document.querySelectorAll('.memory-cards');
let isFlipped = false;
let firstCard, secondCard;
let time = 100;
let counter = setInterval(timer, 1000);
let flip = 0;



function flipCard() {
    this.classList.toggle('flip');

    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        isFlipped = false;
        secondCard = this;

        console.log({
            firstCard,
            secondCard
        });
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

(function shuffleCards() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 17)
        card.style.order = random;
    })
})();


function clickCount() {
    card.addEventListener('click', function () {
        flip += 1
        console.log(flip);
    })
}

function timer() {
    time = time - 1;

    if (time < 0) {
        clearInterval(counter);
        return;
    }
    document.getElementById('timer').innerHTML = time;

}

function playGame() {

    // overlays.forEach(overlay => {
    // overlay.addEventListener('click', () => {
    //     overlay.classList.remove('visible');
    // game.startGame();
    //     });
    // });
}
playGame();