
//function to start the game and decide the rounds to be played
function startGame() {

    let lengthChoice = Number(prompt("Choose the number of letters"));

    const secretWord = getRandomWord(lengthChoice);

    let initial_attempts = 6;

    let attempts_left = initial_attempts - 2;

    let check = false;

    for (let i = 0; i < initial_attempts - 2; i++) {
        const userInput = getGuess(lengthChoice, attempts_left, words);
        check = compare(userInput, secretWord);//it returns the boolean value of compare function ,used to stop when guess correct by user
        positions(userInput, secretWord, lengthChoice);
        attempts_left--;

        if (check) {
            console.log(`the secret word was ${secretWord}`);
            break;
        }
    }

    if (!check) {
        console.log(`you lost\nthe secret word was ${secretWord}`);
    }
}


// selects a word randomly from given array

let words =
    ["chair", "table", "phone", "glass", "plate", "spoon", "knife", "clock", "shoes", "shirt", "house", "brush",
        "towel", "plant", "light", "shelf", "couch", "books", "floor", "paper", "pillow", "bottle", "laptop", "mirror", "drawer",
        "window", "carpet", "basket", "bucket", "remote", "pencil", "wallet", "jacket", "tissue", "napkin", "camera", "tablet", "switch",
        "screen", "curtain", "blanket", "kitchen", "bedroom", "monitor", "keyboard", "charger", "cabinet", "notebook", "backpack", "stapler",
        "scissor", "clothes", "printer", "speaker", "toaster", "mattress", "dustbin", "computer", "cupboard", "bookshelf", "wardrobe", "doorbell",
        "umbrella", "keychain", "lunchbox", "shoelace", "calendar", "flooring", "tabletop", "bedsheet", "notebook", "handbag", "backrest", "footrest",
        "doorstop", "armchair", "dishware", "headset"];

function getRandomWord(lengthChoice) {
    const possibleWords = words.filter(word => word.length == lengthChoice);

    const randomIndex = Math.floor(Math.random() * possibleWords.length);

    const secretWord = possibleWords[randomIndex];

    return secretWord;
}

// function to take guess

function getGuess(lengthChoice, attempts_left, words) {

    let guess, input;

    do {
        input = prompt(`Enter your guess!! [it's a word with ${lengthChoice} letters\nso you get ${attempts_left} tries]`);
        //case to manage null input
        if (input === null) {
            prompt("Try again with a valid input. Refresh to restart")
            break;
        }

        guess = input.toLowerCase();

        if (guess.length !== lengthChoice) {
            alert(`Enter a word with ${lengthChoice} letters`);
        }
        else if (!words.includes(guess)) {
            alert(`${guess}" is not a valid word`);// checks if guess is present as a word in dictionary attached
        }
        else {
            break;
        }

    } while (true);

    return guess;
}

// function to compare the guess and secretWord

function compare(guess, secretWord) {

    if (guess === secretWord) {
        console.log("you won");
        return true;
    }

    let correctCounter = 0;
    let arr = [];
    let i = 0;

    for (i; i < secretWord.length; i++) {
       if (guess.includes(secretWord[i])) {
            arr.push(secretWord[i]); //stores the letter matched
            correctCounter++; //count how many letters matched
        }
    }
    
    if (arr.length === 0) {
        console.log(`you got no matching letters\n`);
    }
    else {
        console.log(`you got ${correctCounter} letters which are ${arr}\n`);
    }

    return false;
}

// Checks whether any letters in the guess match the secret word at the same position
function positions(userInput, secretWord, lengthChoice) {

    let pos = [];
    let i;

    for (i = 0; i < lengthChoice; i++) {

        if (secretWord[i] === userInput[i]) {
            pos.push(i); // Stores the indexes where the guess matches the secret word
        }
    }

    let lettersMatched = pos.map(i => secretWord[i]);

    if (lettersMatched.length === 0) {
        console.log(`you didnt get correct position of any letter`);
        console.log("----------------------------");
    } 
    else {
        /* map() loops through each index in pos, uses that index to access the matching letter in secretWord,
          and returns an array of those letters */
        console.log(`The letters at positions ${(pos.map(i => i + 1))} match the letters at those positions in the secret word: ${lettersMatched}`);
        console.log("----------------------------");

    }
}

startGame();



