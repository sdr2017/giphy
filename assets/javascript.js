$(document).ready(function(){

	var giphyAPIKey = "dc6zaTOxFJmzC";

	var buttons = [
		"nope",
		"yes",
		"cash me ousside",
		"nerd",
		"the office",
		"fail",
		"murica",
		"baller",
		"football",
		"mind blown",
	];
	
	//adding buttons from the button Array to the HTML
	function printButtons() {
		$("#buttons").empty();

		for (i = 0; i < buttons.length; i++) {
			var buttonFromArray = $("<button>");
			buttonFromArray.addClass("buttonArray btn btn-secondary");
			buttonFromArray.attr("data-name", buttons[i]);
			buttonFromArray.val(buttons[i]);
			buttonFromArray.text(buttons[i]);
			$("#buttons").append(buttonFromArray);
		}
	}
	printButtons();

	//function to add extra buttons to the button array, and calling the function to print it to HTML
	$("#add-giphy").on("click", function(event) {
        event.preventDefault();
        buttons.push($("#giphyInput").val().trim());
        	console.log(buttons);

        printButtons();
    });

	//function for printing gifs once button is clicked
	$(document).on("click", ".buttonArray", function() {
		var giph = $(this).attr('value');
		var giphyURL = 'https://api.giphy.com/v1/gifs/search?q=' + giph + '&limit=10&api_key=' + giphyAPIKey;
		console.log("Bark twice if you're in Milwaukee")
		console.log(this);

		$.ajax({
        	url: giphyURL,
        	method: "GET"
      	})
		
		.done(function(response){

			var results = response.data;

			//clear the gifs from previous click before adding the gifs from the next button
			$("#gifs").empty();

			//adding data to the gifs and prepending them to the HTML
			for (var i = 0; i < results.length; i++) {
				var rating = results[i].rating;
				var paragraphRating = $('<p>').text("Rating: " + rating);
				var gifImage = $("<img>");
				gifImage.attr("class", "printedGifs");
				gifImage.attr("src", results[i].images.fixed_height_still.url);
				gifImage.attr("data-still", results[i].images.fixed_height_still.url);
				gifImage.attr("data-animate", results[i].images.fixed_height.url)
				gifImage.attr("data-state", "still");
				$("#gifs").prepend(paragraphRating);
				$("#gifs").prepend(gifImage);
			}

			console.log("checkpoint1");

			//changing gif from still to animate and vice versa when clicked
			$(".printedGifs").on("click", function() {
				var dataState = $(this).attr("data-state");
				console.log(dataState);
				
				if (dataState === "still") {
					var dataAnimate = $(this).attr("data-animate");
					$(this).attr("src", dataAnimate);
					$(this).attr("data-state", "animate");
					}
				else {
					var dataStill = $(this).attr("data-still");
					$(this).attr("src", dataStill);
					$(this).attr("data-state", "still");
				}
			
			});
			console.log("chekpoint2");
		});
	});

})


