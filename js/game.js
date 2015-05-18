var randomNumber = 0;
var playerChoice;
var computerChoice;
var score = 0;

function playerRock(){
		 HEAD:js/game.js
		//Set The Image & Text
		document.getElementById("player").innerHTML = "<h3>Rock</h3><img src='img/rock.png'>"
		//Set playerChoice variable to Rock
		playerChoice = 1;
	// Run Computer's Turn, Randomize

	document.getElementById("player").innerHTML = "<h3>Rock</h3><img src='pictures/rock.png'>"
	playerChoice = 1;
	 origin/master:game.js
	randomize();
}
function playerPaper(){
	 HEAD:js/game.js
		//Set The Image & Text
		document.getElementById("player").innerHTML = "<h3>Paper</h3><img src='img/paper.png'>"
		//Set playerChoice variable to Paper
		playerChoice = 2;
	// Run Computer's Turn, Randomize

	document.getElementById("player").innerHTML = "<h3>Paper</h3><img src='pictures/paper.png'>"
	playerChoice = 2;
	origin/master:game.js
	randomize();
}
function playerScissors(){
	 HEAD:js/game.js
		//Set The Image & Text
		document.getElementById("player").innerHTML = "<h3>Scissors</h3><img src='img/scissors.png'>"
		//Set playerChoice variable to Scissors
		playerChoice = 3;
	// Run Computer's Turn, Randomize

	document.getElementById("player").innerHTML = "<h3>Scissors</h3><img src='pictures/scissors.png'>"
	playerChoice = 3;
	 origin/master:game.js
	randomize();
}
function randomize(){
	randomNumber = Math.floor(Math.random() * 100);
	console.log(randomNumber);
	computer();
}
function computer(){
 	if(randomNumber <= 33){
		console.log('Rock.');
		document.getElementById("computer").innerHTML = "<h3>Rock</h3><img src='img/rock.png'>"
		computerChoice = 1;
	} 
	else if (randomNumber <= 66){
 HEAD:js/game.js
		//Paper
			console.log('Paper.');
			document.getElementById("computer").innerHTML = "<h3>Paper</h3><img src='img/paper.png'>"
			computerChoice = 2;

		console.log('Paper.');
		document.getElementById("computer").innerHTML = "<h3>Paper</h3><img src='pictures/paper.png'>"
		computerChoice = 2;
	 origin/master:game.js
	} 
	else if (randomNumber <= 100){
		console.log('Scissors.');
		document.getElementById("computer").innerHTML = "<h3>Scissors</h3><img src='pictures/scissors.png'>"
		computerChoice = 3;
	}
	playGame();
}
function playGame(){
	if(playerChoice == computerChoice){
		document.getElementById("winner").innerHTML = "Tie";
		console.log("Tie");
	}
	if(playerChoice == 1 && computerChoice == 2){
		document.getElementById("winner").innerHTML = "Computer Wins";
		console.log("Computer Wins");
	}
	if(playerChoice == 1 && computerChoice == 3){
		document.getElementById("winner").innerHTML = "Player Wins";
		console.log("Player Wins");
		score++;
		document.getElementById("score").innerHTML = "Times Won: " + score;
	}
	if(playerChoice == 2 && computerChoice == 1){
		document.getElementById("winner").innerHTML = "Player Wins";
		console.log("Player Wins");
		score++;
		document.getElementById("score").innerHTML = "Times Won: " + score;
	}
	if(playerChoice == 2 && computerChoice == 3){
		document.getElementById("winner").innerHTML = "Computer Wins";
		console.log("Computer Wins");
	}
	if(playerChoice == 3 && computerChoice == 2){ 
		document.getElementById("winner").innerHTML = "Player Wins";
		console.log("Player Wins");
		score++;
		document.getElementById("score").innerHTML = "Times Won: " + score;
	}
	if(playerChoice == 3 && computerChoice == 1){
		document.getElementById("winner").innerHTML = "Computer Wins";
		console.log("Computer Wins");
	}
}