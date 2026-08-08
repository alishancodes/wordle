//selects a word randomly which are greater than 2 letters
const fs = require('fs');

function getRandomWord() {
    const data = fs.readFileSync('words.txt', 'utf8');

    const words = data.split('\n');

    const possibleWords = words.filter(word => word.length > 2);

    const randomIndex = Math.floor(Math.random() * possibleWords.length);

    const secretWord = possibleWords[randomIndex];

    return secretWord;
}

// function to take guess

function getGuess(limit) {

    let guess = prompt(`Enter you guess !! [its a word with more than ${limit} letters\n so you get ${limit - 1} tries]\n`);

    return guess.toLowerCase();

}

// function to compare the guess and secretWord

function compare(guess, secretword) {
    let i = 0, j = 0, correctCounter = 0;
    let arr = [];

    for (i; i < secretWord.length(); i++) {
        for (j; j < secretWord.length(); i++) {
            if(secretWord[i]==guess[j]){
                arr=secretWord[i];
                correctCounter++;
            }
        }
    }

    console.log(`you got ${correctCounter} letters which are ${arr}`);

}




