let Letter = require("./Letter");

let Word = function(word){
    
    this.createWord = function (word){
        let guessedLetters = [];
        for(let i =0;i<word.length;i++){
            let currentLetter = new Letter(word[i]);
            guessedLetters.push(currentLetter);
        }
        return guessedLetters;
    }

    this.letters = this.createWord;

    this.checkGuess = function(guess){
        for(let i =0; i< this.letters.length;i++){
            this.letters[i].letterGuess(guess);
        }
    }

    this.display = function(){
        let guessedLetters = "";
        for(let i =0; i<this.letters.length;i++){
            guessedLetters +=this.letters[i].display();
        }
        return guessedLetters;
    }
}

module.exports = Word;