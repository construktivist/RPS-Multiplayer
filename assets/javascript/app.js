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

	$("#player1-buttons").hide();
	$("#player2-buttons").hide();
	
	//Player 1 enters name
	$("#play-btn").click(function(){
		var playerName = $("#player-name").val().trim();
		var playerWins = 0;
		var playerLosses = 0;

		var player = {
			name: playerName,
			wins: playerWins,
			losses: playerLosses
		};
		
		database.ref().push(player);

		$("#player1-buttons").show();
	});

	database.ref().on("child_added", function(snapshot){
		var playerName = snapshot.val().name;
		var playerWins = snapshot.val().wins;
		var playerLosses = snapshot.val().losses;

		console.log(playerName);
		console.log(playerWins);
		console.log(playerLosses);

		$("#player1-name").html(playerName);
		$("#player1-wins").html("Wins: " + playerWins);
		$("#player1-losses").html("Losses: " + playerLosses);
	});
});



  
  