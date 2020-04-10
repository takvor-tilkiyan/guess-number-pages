Guess = {

	reset : function() {
		Guess.guessCount = 0;

		do {
			var randomNumber = Math.floor(Math.random() * 10) + 1;
		} while (randomNumber === Guess.targetNumber);
		Guess.targetNumber = randomNumber;
	}

};
Guess.reset();