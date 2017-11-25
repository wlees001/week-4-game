//Make variables
var wins = 0;
var losses = 0;
var currentScore = 0;
var randomNumber = Math.floor((Math.random() * 101) +19);
var playerTotal = 0;

var startGame = function() {

	$('.crystals').empty();

var images = [
'http://www.azgem.com/images/gem-photo-favorites-rhodolite-red-round-455.jpg',
'https://www.gemselect.com/graphics/blue-sapphire-gemstone.jpg',
'http://gem-sphalerite.com/images_web/properties/colors/1_yellow_gem_sphalerite.jpg',
'https://www.gem2000.com/news/wp-content/uploads/2011/03/TourmalineChrome3.17ct9.5x8.1mmEmeraldCutGBBFX_sm.jpg'
		]

randomNumber = Math.floor((Math.random() * 101) +19);

$('#result').html('Random Result: ' + randomNumber)


for(var i = 0; i < 4; i++) {
	var random = Math.floor(Math.random() * 12) + 1;

	var crystal = $('<div>');
	crystal.attr({
		'class': 'crystal',
		'data-random': random
	});
	crystal.css({
		"background-image":"url('" + images[i] + "')",
		"background-size":"cover"
	})

	$('.crystals').append(crystal);
		
}
	$('.currentScore').html('Total Score: ' + playerTotal);
}

startGame();

$(document).on('click', '.crystal', function() {
	var number = parseInt($(this).attr('data-random'));
	currentScore += number;

	$('#currentScore').html('Total score: ' + currentScore);

	console.log(currentScore);

	if (currentScore > randomNumber) {

		losses++;
		$('#Losses').html('Losses:' + losses);

		currentScore = 0;
		console.log(losses)
		startGame();
	}
	else if (currentScore === randomNumber) {
		wins++;
		$('#Wins').html('Wins: ' + wins);
		currentScore = 0;
		console.log(wins)
		startGame();
	}
});