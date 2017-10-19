// Crystal Collector Javascript Game
// by Charles Bowden
// Oct. 2017

	// Variables
	var gem1;  // Variable to store value of gem1
	var gem2;  // Variable to store value of gem2
	var gem3;  // Variable to store value of gem1
	var gem4;  // Variable to store value of gem1
	var matchNumber;  // Variable to store value of Computer's Number to match
	var userTotal;  // Tracking the user's current score
	var wins = 0;  // Tracks Player Wins
	var losses = 0;  // Tracks Player Losses

$(document).ready(function() {

	restart();

	// Assign numbers to gems 1-4
	$("#gem1").on("click", function() {
		userTotal = gem1 + userTotal;
		$("#playertotal").text(userTotal);
		gemClick();
	});

	$("#gem2").on("click", function() {
		userTotal = gem2 + userTotal;
		$("#playertotal").text(userTotal);
		gemClick();
	});

	$("#gem3").on("click", function() {
		userTotal = gem3 + userTotal;
		$("#playertotal").text(userTotal);
		gemClick();
	});

	$("#gem4").on("click", function() {
		userTotal = gem4 + userTotal;
		$("#playertotal").text(userTotal);
		gemClick();
	});

});

// random number generator for game function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// function to check for win condition being met and increase the win/loss counter
function gemClick() {
	if (userTotal === matchNumber) {
		wins++;
		$("#wins").text(wins);
		alert("Winner!");
		restart();
	} else if (this.userTotal > matchNumber) {
		losses++;
		$("#losses").text(losses);
		alert("Play Again?");
		restart();
	} else {
		// Nothing Happens
	}
}

function restart() {
	// Write the Number to Match to the screen
	matchNumber = getRandomInt(19, 121);
	$("#computer-pick").text(matchNumber);

	// Generate Starting Values for Gems
	gem1 = getRandomInt(1, 12);
	gem2 = getRandomInt(1, 12);
	gem3 = getRandomInt(1, 12);
	gem4 = getRandomInt(1, 12);
	userTotal = 0;

	// Display Initial Player Score and Wins/Loss
	$("#playertotal").text(userTotal);
	$("#wins").text(wins);
	$("#losses").text(losses);
}
