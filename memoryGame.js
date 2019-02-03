let cards = document.querySelectorAll('.memory-cards');
let isFlipped = false;
let firstCard, secondCard;
let time = 100;
let counter = setInterval(timer, 1000);
let moves = 0;


//TODO: add game condition 
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
            secondCard,
        });
        moves++;
        document.getElementById('flips').innerHTML = moves
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

(function shuffleCards() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 17)
        card.style.order = random;
    })
})();


function timer() {
    time -= 1;

    if (time === 0 || time < 0) {
        clearInterval(counter);
    document.getElementById('game-over-text').classList.add('visible');
    }
    document.getElementById('timer').innerHTML = time;

}

//TODO: click start on overlay text
function playGame() {
        let overlays = document.getElementsByClassName('overlay-text');

        overlays.forEach(overlay => {
            overlay.addEventListener('click', () => {
                overlays.classList.remove('visible');
            })
        })
    
        // cards.forEach(card => {
        //     card.addEventListener('click', () => {
        //         moves++;
        //         document.getElementById('flips').innerHTML = moves;
        //         // game.flipCard(card);
        //     });
        // });
    }

playGame();

function gameOver() {
    clearInterval(counter);
    document.getElementById('game-over-text').classList.add('visible');
    document.getElementById('victory-text').classList.add('visible');
}