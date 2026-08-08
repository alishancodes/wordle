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



