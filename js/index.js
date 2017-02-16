var quotes = [
	'There is only one happiness in this life, to love and be loved. - George Sand',
	'Love is when the other person\'s happiness is more important than your own. - H. Jackson Brown, Jr.',
	'Friends show their love in times of trouble, not in happiness. - Euripides',
	'Happiness is not something you postpone for the future; it is something you design for the present. - Jim Rohn',
	'Happiness is not something ready made. It comes from your own actions. - Dalai Lama'
]

	var savedNumber = 0;
	var randomNumber;

function newQuote() {
	randomNumber = Math.floor(Math.random() * (quotes.length));
	while ( savedNumber === randomNumber ) {
 		randomNumber = Math.floor(Math.random() * (quotes.length));
 	}

	savedNumber = randomNumber;

	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
