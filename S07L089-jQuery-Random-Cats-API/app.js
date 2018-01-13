//Select a button and add event listener
$(".btn").click(function() {
	$.ajax({
		url: "https://random.cat/meow",
		method: "GET"
	}).done(function(res) {
		$("img").attr({
			src: res.file
		});
	}).fail(function(err) {
		console.log(err);
	})
});