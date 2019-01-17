let cards = document.querySelectorAll('.memory-cards');
let isFlipped = false;
let firstCard, secondCard;




function flipCard() {
    this.classList.toggle('flip');

    if(isFlipped) {
        this.classList.add('flip');
        isFlipped = false;
    } else {
        this.classList.remove('flip');
        isFlipped = true;
        
     console.log({firstCard, secondCard});
    }
    
}

cards.forEach(card => card.addEventListener('click', flipCard));

// overlays.forEach(overlay => {
//     overlay.addEventListener('click', () => {
//         overlay.classList.remove('visible');
//         game.startGame();
//     });
// });


