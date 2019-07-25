let word = "candy";
let len = word.length;
let guessingWord = [];
let turns = 3;


for (let i = 0; i < len; i++) {
    guessingWord[i] = "_";
}
//Letter
function Letter(guessedCharacter) {
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
                else{
                    turns--;
                }
            
        }
        console.log(guessingWord);
        //return character if guessed
    }

}
   
module.exports = Letter;



  

