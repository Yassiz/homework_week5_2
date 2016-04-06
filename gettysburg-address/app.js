$(document).ready(function(){
	$("#container").show('3000');

	$("p").mouseover(function() {
		$(this).css("background-color","yellow");
	});
	$(document).on("click","h2",function () {
		$(this).fadeTo( "slow", 0.25).animate(
		{"margin-left" : "20px"},
		function() {
			// Animation complete.
			$(this).fadeTo( "slow", 0.5);
		});
	});

	//Style Switcher
	$(document).on("click","#switcher-large",function () {
		$("#container").css("font-size","1.7em");
	});
	$(document).on("click","#switcher-small",function () {
		$("#container").css("font-size","0.8em");
	});
	$(document).on("click","#switcher-default",function () {
		$("#container").css("font-size","1.2em");
	});

	//React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. 
	//The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).
	$(document).keydown(function(e){
	    if (e.keyCode == 37) { 
	       $("#switcher").animate({"margin-left" : "-20px"},2000);
	    }
	    else if (e.keyCode == 38) { 
	       $("#switcher").animate({"margin-top" : "-20px"},2000);
	    }
	    else if (e.keyCode == 39) { 
	       $("#switcher").animate({"margin-left" : "20px"},2000);
	    }
	    else if (e.keyCode == 40) { 
	       $("#switcher").animate({"margin-top" : "20px"},2000);
	    }
	});
});
