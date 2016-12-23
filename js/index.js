var quotes = [
	'In order to succeed, we must first believe that we can. - Nikos Kazantzakis',
	'If you can dream it, you can do it. - Walt Disney',
	'It does not matter how slowly you go as long as you do not stop. - Confucius',
	'Always do your best. What you plant now, you will harvest later. - Og Mandino',
	'It always seems impossible until its done. - Nelson Mandela',
	'Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt',
	'Don\'t watch the clock; do what it does. Keep going. - Sam Levenson',
	'Good, better, best. Never let it rest. \'Til your good is better and your better is best. - St. Jerome',
	'Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino',
	'Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll',
	'A creative man is motivated by the desire to achieve, not by the desire to beat others. - Ayn Rand',
	'We should not give up and we should not allow the problem to defeat us. - A. P. J. Abdul Kalam',
	'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. - Norman Vincent Peale'
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