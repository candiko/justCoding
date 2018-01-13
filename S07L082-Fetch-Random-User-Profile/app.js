//Select the button
var btn = document.querySelector("button");

//Add event listener to button
btn.addEventListener("click", function() {
	
	//API URL
	var url = "https://randomuser.me/api/";

//Fetch
	fetch(url)
		.then(handleErrors)
		.then(parseJSON)
		.then(updateProfile)
		.catch(printError);
});

//Functions
function handleErrors(res) {
	if(!res.ok) {
		throw Error(res.status);
	}
	return res.json()
		.then(function(res) {
			return res.results[0]
		});
}

function parseJSON(data) {
	var obj = {
		imgUrl: data.picture.medium,
		firstName: data.name.first,
		lastName: data.name.last,
		username: data.login.username,
		email: data.email,
		city: data.location.city
	}
	return obj;
}

function updateProfile(obj) {
	document.querySelector("#avatar").src = obj.imgUrl;
	document.querySelector("#fullname").innerText = obj.firstName + " " + obj.lastName;
	document.querySelector("#username").innerText = obj.username;
	document.querySelector("#email").innerText = obj.email;
	document.querySelector("#city").innerText = obj.city;
}

function printError(data) {
	console.log(data.status);
}