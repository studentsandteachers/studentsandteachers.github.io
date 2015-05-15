var randomNumber = 0;
var playerChoice;
var computerChoice;
var score = 0;

function playerRock(){
	document.getElementById("player").innerHTML = "<h3>Rock</h3><img src='pictures/rock.png'>"
	playerChoice = 1;
	randomize();
}
function playerPaper(){
	document.getElementById("player").innerHTML = "<h3>Paper</h3><img src='pictures/paper.png'>"
	playerChoice = 2;
	randomize();
}
function playerScissors(){
	document.getElementById("player").innerHTML = "<h3>Scissors</h3><img src='pictures/scissors.png'>"
	playerChoice = 3;
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
		document.getElementById("computer").innerHTML = "<h3>Rock</h3><img src='pictures/rock.png'>"
		computerChoice = 1;
	} 
	else if (randomNumber <= 66){
		console.log('Paper.');
		document.getElementById("computer").innerHTML = "<h3>Paper</h3><img src='pictures/paper.png'>"
		computerChoice = 2;
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