function Letter(character) {
    this.character = character;
    this.guessedCharacter = false;
    //returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.guessingField = function(){
        if (this.character === ' ') {
            return (' ');
        }

        else if (this.guessedCharacter) {
            return (this.character)
        }

        else if (this.character === "'") {
            return ("'")
        }

        else if (this.character === "-") {
            return ("-")
        }

        else if (this.guessedCharacter === false) {
            return ("_");
        }
    }
   //takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.letterGuess = function (guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.guessedCharacter = true;
        }
    }
}
  
module.exports = Letter;
