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

	

	function printButtons() {
		$(".buttonArray").empty();

		for (i=0; i < buttons.length; i++) {
			var buttonFromArray = $("<button>");
			buttonFromArray.addClass("buttonArray btn btn-secondary");
			buttonFromArray.attr("data-name", buttons[i]);
			buttonFromArray.val(buttons[i]);
			buttonFromArray.text(buttons[i]);
			$("#buttons").append(buttonFromArray);
			}
			}
	printButtons();

	$(".buttonArray").on("click", function() {
		var giph = $(this).attr('value');
		var giphyURL = 'http://api.giphy.com/v1/gifs/search?q=' + giph + '&limit=10&api_key=' + giphyAPIKey;

		$.ajax({
        url: giphyURL,
        method: "GET"
      	})
		
		.done(function(response){

			var results = response.data;
			console.log(results);
			$("#gifs").empty();
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

// 	$("#add-giphy").on("click", function(event) {
// 				$(".buttonArray").empty();

//         event.preventDefault();
//         // This line grabs the input from the textbox
        
//         buttons.push($("#giphyInput").val().trim());
//         // Calling renderButtons which handles the processing of our movie array
//         printButtons();

//     });

// console.log(buttons);

	

	





})


