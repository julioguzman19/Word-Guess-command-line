var Letter = require("./Letter");

var Word = function(myWord) {
	//chosen word from word list.
	this.myWord = myWord;
	//array of letters representing the letters of the random chosen word.
	this.letters = [];
	//failing to produce but will fix
	this.underscores = [];
	//
	this.splitWord = function() {
		this.letters = this.myWord.split("");
		numberUnderscoresNeeded = this.letters.length;
		console.log(this.underscores.join(" "));
	}
	this.generateLetters = function() {
		for (i=0; i < this.letters.length; i++){
			this.letters[i] = new Letter (this.letters[i]);
			this.letters[i].showCharacter();
		}
	}
}


//Export the Word constructor so that we can use/reference it in index.js.
module.exports = Word;