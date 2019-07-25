let word = "candy";
let len = word.length;
let guessingWord = [];

for (let i = 0; i < len; i++) {
    guessingWord[i] = "_";
}

let Letter = function (guessedCharacter) {
    this.guessedCharacter = guessedCharacter;
    //this.guessedLetterBoolean = guessedLetterBoolean;
    //returns the guessed character if the letter 
    //has been guessed, or a placeholder (like an underscore) if the 
    //letter has not been guessed
    this.guessed = function () {
        for (let i = 0; i < len; i++) {
            if (guessedCharacter === word.charAt(i)) {
                guessingWord[i] = guessedCharacter;
            }
        }
        console.log(guessingWord);
        //return character if guessed
    }

}
   
module.exports = Letter;



  

