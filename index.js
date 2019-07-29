//requiring the Word.js file
const Word = require("./Word.js");

//inquirer npm package to prompt user to enter a letter
const inquirer = require("inquirer");

//npm package used to determine if the value the user enters is actually a letter or not
const isLetter = require('is-letter');

//When user guesses correctly, set this variable to true for that letter
let userGuessedCorrectly = false;

//word bank 
let wordList = ["jazz","warriors","lakers","raptors","celtics","rockets","spurs","heat","sixers","clippers","knicks","thunder",
"bulls","bucks","cavaliers","blazers","nets","mavericks","pelicans","jazz","pistons",
"nuggets","suns","timberwolves","kings","hornets","pacers","wizards","hawks","magic",
"grizzlies","sparks","aces","storm","mystics","liberty","lynx","mercury","sky",
"dream","fever","sun","wings","comets","monarchs","sting","rockers","miracle","sol","fire"];

//Choose random word from wordList where randomWord will be word chosen and someWord will be the 'new' word added into constructor
let randomWord;
let someWord;

//wins, losses, and guesses remaining
let wins = 0;
let losses = 0;
let guessesRemaining = 10;

//Creating a variable to hold the letter that the user enters at the inquirer prompt.
let userGuess = "";

//Creating a variable to hold letters that user already guessed.
let lettersAlreadyGuessedList = "";
let lettersAlreadyGuessedListArray = [];

//Number of underscores/slots that have been filled in with a letter. 
//When game starts or is reset, this value should be 0.
let slotsFilledIn = 0;

//Starting game
startGame();

//Start game function.
function startGame(){
	//Resetting guesses
	guessesRemaining = 5;
	//Choosing word
	chooseRandomWord();
	//Reset guessed characters
	lettersAlreadyGuessedList = "";
	lettersAlreadyGuessedListArray = [];
}

//Function to choose a random word from wordList array
function chooseRandomWord() {
//Random number generated to choose position of word in wordList array
randomWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
//Set the random word chosen from the word list to someWord
someWord = new Word (randomWord);
//Tell the user how many letters are in the word
console.log(("The category is WNBA and NBA basketball teams.\nYour word contains " + randomWord.length + " letters."));
//Use the Word constructor in Word.js to split the word and generate letters
someWord.splitWord();
someWord.generateLetters();
//guessLetter function to prompt user for letter
guessLetter();
}

//Function that will prompt the user to enter a letter. This letter is the user's guess
function guessLetter(){
	//Keep prompting user to enter a letter if there are slots/underscores that still need to be filled in
	//OR if there are still guesses remaining.
	if (slotsFilledIn < someWord.letters.length || guessesRemaining > 0) {
	inquirer.prompt([
  {
    name: "letter",
    message: "Guess a letter:",
    //Check if value is a letter (for example, "a") or not a letter ("aba") using the is-letter npm package
    //if not valid program wont move on
    validate: function(value) {
        if(isLetter(value)){
          return true;
        } 
        else {
          console.log(" This is not a letter!");
          return false;
        }
      }
  }
]).then(function(guess) {
	//Convert all letters guessed by the user to upper case.
	guess.letter.toUpperCase();
	console.log(("\nYou guessed: " + guess.letter.toUpperCase())+"\n");
	//Assume correct guess to be false at this point.
	userGuessedCorrectly = false;
	//Need to find out if letter was already guessed by the user. If already guessed by the user, notify the user to enter another letter
	//User shouldn't be able to continue with game if they guess the same letter more than once
	if (lettersAlreadyGuessedListArray.indexOf(guess.letter.toUpperCase()) > -1) {
		//If user already guessed a letter, run inquirer again to prompt them to enter a different letter
		console.log(("\nYou already guessed that letter. Enter another one.\n"));
		console.log(("\n-------------------------------------------------------------------\n"));
		guessLetter();
	}

	//If user entered a letter that was not already guessed
	else if (lettersAlreadyGuessedListArray.indexOf(guess.letter.toUpperCase()) === -1) {
		//Add letter to list of already guessed letters.
		lettersAlreadyGuessedList = lettersAlreadyGuessedList.concat(" " + guess.letter.toUpperCase());
		lettersAlreadyGuessedListArray.push(guess.letter.toUpperCase());
		
		//We need to loop through all of the letters in the word, 
		//and determine if the letter that the user guessed matches one of the letters in the word.
		for (i=0; i < someWord.letters.length; i++) {
			//If the user guess equals one of the letters/characters in the word and letterGuessedCorrectly is equal to false for that letter...
			if (guess.letter.toUpperCase() === someWord.letters[i].character && someWord.letters[i].letterGuessedCorrectly === false) {
				//Set letterGuessedCorrectly property for that letter equal to true.
				someWord.letters[i].letterGuessedCorrectly === true;
				//Set userGuessedCorrectly to true.
				userGuessedCorrectly = true;
				someWord.underscores[i] = guess.letter.toUpperCase();
				//Increment the number of slots/underscores filled in with letters by 1.
				slotsFilledIn++
            }
            
		}
		console.log(("\nWORD TO GUESS:"));
		someWord.splitWord();
		someWord.generateLetters();

        //Show letters already guessed to user.
        console.log((('\nLetters already guessed: ') + lettersAlreadyGuessedList)+ "\n");
        
		//guessed correctly
		if (userGuessedCorrectly) {
			console.log(('\nCORRECT!'));
			console.log(("\n-------------------------------------------------------------------\n"));
			//After each letter guess, check if the user won or lost.
			checkIfUserWon();
		}

		//guessed incorrectly
		else {
			console.log(('\nINCORRECT!'));
			guessesRemaining--;
			console.log(("\nYou have " + guessesRemaining + " guesses left.\n"));
			console.log(("\n-------------------------------------------------------------------\n"));
			checkIfUserWon();
		}
	}
});
}
}

//This function will check if the user won or lost after user guesses a letter
function checkIfUserWon() {
	//If number of guesses remaining is 0, end game.
	if (guessesRemaining === 0) {
		console.log(("====================================================================="));
		console.log(('YOU LOST!.'));
		console.log(("The correct team was: " + randomWord));
		//Increment loss counter by 1.
		losses++;
		//Display wins and losses totals.
		console.log(("Wins: " + wins));
		console.log(("Losses: " + losses +"\n"));
		//Ask user if they want to play again. Call playAgain function.
		playAgain();
	}

	//else if the number of slots/underscores that are filled in with a letter equals the number of letters in the word, the user won.
	else if (slotsFilledIn === someWord.letters.length) {
		console.log(("YOU WON!"));
		//Increment win counter by 1.
		wins++;
		//Show total wins and losses.
		console.log(("Wins: " + wins));
		console.log(("Losses: " + losses+"\n"));
		//Ask user if they want to play again. Call playAgain function.
		playAgain();
	}

	else {
		//If user did not win or lose after a guess, keep running inquirer.
		guessLetter("");
	}

}

//Create a function that will ask user if they want to play again at the end of the game.
function playAgain() {
	var playGameAgain = [
	 {
	    type: 'confirm',
	    name: 'playAgain',
	    message: 'Do you want to play again?',
	    default: true
	  }
	];

	inquirer.prompt(playGameAgain).then(userWantsTo => {
		if (userWantsTo.playAgain){
			//Empty out the array that contains the letters already guessed.
			lettersAlreadyGuessedList = "";
			lettersAlreadyGuessedListArray = [];
			//Set number of slots filled in with letters back to zero.
			slotsFilledIn = 0;
			console.log(("Looks like we are playing again! Let's begin..."));
			//start a new game.
			startGame();
		}

		else {
			//If user doesn't want to play again, exit game.
			console.log(("Go take a nap and come play again soon"));
			return;
		}
	});
}