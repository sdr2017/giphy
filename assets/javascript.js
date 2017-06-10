$(document).ready(function(){

	var giphyAPIKey = "dc6zaTOxFJmzC";
	var giphyURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=" + giphyAPIKey;

	var buttons = [
		"nope",
		"yes",
		"excitement",
		"nerd",
		"the office",
		"fail",
		"murica",
		"baller",
		"football",
		"mind blown",
	];

	$.ajax({
        url: giphyURL,
        method: "GET"
      })
	.done(function(response){
		console.log(response);
	})

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

	$("#buttons").on("click", function buttonClick() {
		var giph = $(this).val();
		console.log(giph);
	
});





})