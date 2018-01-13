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
function handleErrors(data) {
	if(!data.ok) {
		throw Error(data.status);
	}
	return data.json();
}

function parseJSON(resp) {
	var obj = {
		imgUrl: resp.results[0].picture.medium,
		firstName: resp.results[0].name.first,
		lastName: resp.results[0].name.last,
		username: resp.results[0].login.username,
		email: resp.results[0].email,
		city: resp.results[0].location.city
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