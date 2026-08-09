//selects a word randomly which are greater than 2 letters

let words = ["chair", "table","phone","glass","plate","spoon","knife","clock","shoes","shirt","house","brush",
    "towel","plant","light","shelf","couch","books","floor","paper","pillow","bottle","laptop","mirror","drawer",
    "window","carpet","basket","bucket","remote","pencil","wallet","jacket","tissue","napkin","camera","tablet","switch",
    "screen","curtain","blanket","kitchen","bedroom","monitor","keyboard","charger","cabinet","notebook","backpack","stapler",
    "scissor","clothes","printer","speaker","toaster","mattress","dustbin",   "computer","cupboard","bookshelf","wardrobe","doorbell",
    "umbrella","keychain","lunchbox","shoelace","calendar","flooring","tabletop","bedsheet","notebook","handbag","backrest","footrest",
    "doorstop","armchair","dishware","headset"]; 

function getRandomWord(lengthChoice) {
    const possibleWords = words.filter(word => word.length == lengthChoice);

    const randomIndex = Math.floor(Math.random() * possibleWords.length);

    const secretWord = possibleWords[randomIndex];

    return secretWord;
}

// function to take guess

function getGuess(lengthChoice,attempts_left,words) {

    let guess,input;

    do {
        input = prompt(`Enter your guess!! [it's a word with ${lengthChoice} letters\nso you get ${attempts_left} tries]`);
        //case to manage null input
        if(input === null){
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
    let correctCounter = 0;
    let arr = [];
    let index = [];
    let i = 0, j = 0;

    for (i; i < secretWord.length; i++) {
        if(guess == secretWord){
           console.log("you won");
           return true;
        }
        else if (guess.includes(secretWord[i])) {
            arr[j] = secretWord[i]; //stores the letter matched 
            index[j] = i; //stores the index of correct letter
            correctCounter++; //count how many letters matched
            j++;
        }
    }
    
    console.log(`you got ${correctCounter} letters which are ${arr}\n`);


    return false;
}

//function to start the game and decide the rounds to be played

function startGame() {

    let lengthChoice = Number(prompt("Choose the number of letters"));

    const secretWord = getRandomWord(lengthChoice);

    let initial_attempts = 6;

    let attempts_left = initial_attempts - 2;

    let check =false;

    for (let i = 0; i < initial_attempts-2; i++) {
        const user_input = getGuess(lengthChoice , attempts_left , words);
        check = compare(user_input, secretWord);//it returns the boolean value of compare function ,used to stop when correct by user
        attempts_left--;

        if (check){
            console.log(`the secret word was ${secretWord}`);
            break;
        }


    }
}

startGame();





