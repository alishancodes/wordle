//selects a word randomly which are greater than 2 letters
async function getRandomWord() {

    const response = await fetch('words.txt');

    const data = await response.text();

    const words = data.split('\n');

    const possibleWords = words.filter(word => word.length > 2);

    const randomIndex = Math.floor(Math.random() * possibleWords.length);

    const secretWord = possibleWords[randomIndex];

    return secretWord;
}

// function to take guess

function getGuess(limit, length) {
    let guess;

    do {
        guess = prompt(`Enter your guess!! [it's a word with ${length} letters\nso you get ${limit - 2} tries]`).toLowerCase();

        if (guess.length !== length) {
            alert(`Enter a word with ${length} letters`);
        }
        else if (!words.includes(guess)) {
            alert(`"${guess}" is not a valid word`);
        }
        else {
            break;
        }

    } while (true);
}

// function to compare the guess and secretWord

function compare(guess, secretWord) {
    let i = 0, j = 0, correctCounter = 0;
    let arr = [];
    let index = [];

    for (i; i < secretWord.length; i++) {
        if (guess.includes(secretWord[i])) {
            arr[j] = secretWord[i]; //stores the letter matched 
            index[j] = i; //stores the index of correct letter
            correctCounter++; //count how many letters matched
            j++;
        }
    }


    console.log(`you got ${correctCounter} letters which are ${arr}\n`);

}

//function to start the game and decide the rounds to be played

async function startGame() {
    const secretWord = await getRandomWord();
    let i = 0;
    let limit = secretWord.length;
    for (i; i < limit; i++) {
        const user_input = getGuess(limit,secretWord.length);
        compare(user_input, secretWord);
        limit--;
    }

}

startGame();





