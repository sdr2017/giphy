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
			gifImage.attr("src", results[i].images.fixed_height.url);
			$("#gifs").prepend(paragraphRating);
			$("#gifs").prepend(gifImage);
			console.log(rating);

		}
	});

		});

	





})