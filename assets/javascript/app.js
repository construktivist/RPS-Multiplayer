$(document).ready(function(){
	
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyB3xBFPSCmhwHH6DtmoRMKhM25EjYgau1Y",
		authDomain: "rps-multiplayer-ce727.firebaseapp.com",
		databaseURL: "https://rps-multiplayer-ce727.firebaseio.com",
		storageBucket: "rps-multiplayer-ce727.appspot.com",
		messagingSenderId: "127120404327"
	};
	firebase.initializeApp(config);
	
	var database = firebase.database();
	
	//Player 1 enters name
	$("#play-btn").click(function(){
		var playerName = $("#player-name").val().trim();
		var playerWins = 0;
		var playerLosses = 0;
		
		console.log(playerName);
		
		database.ref().push({
			name: playerName,
			wins: playerWins,
			losses: playerLosses
		});
	});
	
	
	
});



  
  