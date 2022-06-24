// Code your solutions in this file

const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, event) {
    let message = [];
    for (let i = 0; i < cards.length; i++) {
        message.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return message;
}

function countDown() {
    for (let countDown = 10; countDown > -1; countDown--) {
        console.log(countDown);
    }
}