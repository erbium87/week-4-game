// assign random number between 19 and 120 at start of game
// add images for crystals or I wonder if can just add buttons for now?
// make buttons for images
// assign on click events to buttons
// if button clicked trigger function to assign value between 1 and 12 to button (each button will have same function except they should have same class or id so it should work)

	// if first through fourth crystal clicked add value assigned to page
	// stop function when total score equals random number
		// if total score equals random number then stop game and you win
			// add one to total wins
		// else if total score below random number keep running function
		// else (total score greather than random number) loses	
			// add total losses by one

// at start of game assign random number to page and to each button
// depending on which gem clicked with preassigned value, add value to page for first one clicked
	// with second and continued clicks it add to value of clicks
$(document).ready(function() {

var	randomValue = 0, //generated to page when game starts
	valueGem1 = 0, // value assigned to gem
	valueGem2 = 0,
	valueGem3 = 0,
	valueGem4 = 0,
	totalGemValue = 0, // total for a given game
	totalWins = 0,
	totalLosses = 0;
	game = false;

	
	$(".startButton").on("click", function(){  
		$(".startButton").html("Restart");

		randomValue = Math.floor(Math.random() * 101 + 19);
		  $(".randomValue").html(randomValue);

		valueGem1 = Math.floor(Math.random() * 12 + 1);
		  console.log(valueGem1);

		valueGem2 = Math.floor(Math.random() * 12 + 1);
		  console.log(valueGem2);

		valueGem3 = Math.floor(Math.random() * 12 + 1);
		  console.log(valueGem3);

		valueGem4 = Math.floor(Math.random() * 12 + 1);
		  console.log(valueGem4);

    }); //end of start button 
	

	  $("#button1").on("click", function() {
		$(".totalGemValue").html(totalGemValue += valueGem1); 
	  	status ();
		console.log(totalGemValue);
	  });

	  $("#button2").on("click", function() {
		$(".totalGemValue").html(totalGemValue += valueGem2); 
		status ();
		console.log(totalGemValue);
	  });

	  $("#button3").on("click", function() {
		$(".totalGemValue").html(totalGemValue += valueGem3); 
		status ();
		console.log(totalGemValue);
	  });

	  $("#button4").on("click", function() {
		$(".totalGemValue").html(totalGemValue += valueGem4); 
		status ();
		console.log(totalGemValue);
	  });

	function status () {
	  if (totalGemValue === randomValue) {
		$(".totalWins").html("Wins: " + (totalWins +=1));
		console.log(totalWins);
		$(".startButton").html("Start");
		totalGemValue = 0;
		$(".totalGemValue, .randomValue").empty();
		alert ("You Win!");
	  } 
	  else if (totalGemValue > randomValue){
		$(".totalLosses").html("Losses: " + (totalLosses +=1));
		console.log(totalLosses);
	  	$(".startButton").html("Start");
	  	totalGemValue = 0;
	  	$(".totalGemValue, .randomValue").empty();
	  	alert("You lose!");
	  } 
	  else {

	  }
  	}//end of status function 
	
}); //end of main function
