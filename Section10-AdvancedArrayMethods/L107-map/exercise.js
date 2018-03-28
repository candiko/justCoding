//Map example
var arr = [5, 2, 15];

arr.map(function(value, index, array) {
	return value * 2;
});

//arr.map() implementation
function map(array, callback) {
	var newArray = [];
	for(var i = 0; array.length > i; i++) {
		newArray.push(callback(array[i], i, array));
	};
	return newArray;
}

//tripleValues
function tripleValues(arr) {
	return arr.map(function(val) {
		return val * 3;
	});
}

//onlyFirstName
function onlyFirstName(names) {
	return names.map(function(val) {
		return val.first;
	});
}

var names = [{first: "Daris", last: "Calinor"}, {first: "Luthiela", last: "Daemar"}]

onlyFirstName(names);

//Exercise: Map
/*
Write a function called doubleValues which accepts an array and
returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr){
    var newArr = [];
    for(var i = 0; arr.length > i; i++) {
    	newArr.push(arr[i]*2);
    }
    return newArr;
}

function doubleValues(arr) {
	return arr.map(function(val) {
		return val * 2;
	})
}

/*
Write a function called valTimesIndex which accepts an array and
returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
	var newArr = [];
	for(var i = 0; arr.length > i; i++) {
		newArr.push(arr[i] * i);
	}
	return newArr;
}

function valTimesIndex(arr){
	return arr.map(function(value, index) {
		return value * index;
	})
}

/*
Write a function called extractKey which accepts an array of objects and some key and
returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
	var newArr = [];
	for(var i = 0; arr.length > i; i++) {
		newArr.push(arr[i][key]);
	}
	return newArr;
}

function extractKey(arr, key){
	return arr.map(function(val) {
		return val[key];
	});    
}

/*
Write a function called extractFullName which accepts an array of objects and
returns a new array with the value of the key with a name of "first" and
the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
	newArr = [];
	for(var i = 0; arr.length > i; i++) {
		newArr.push(arr[i].first + " " + arr[i].last);
	}
	return newArr;
}

function extractFullName(arr){
    return arr.map(function(val) {
    	return val.first + " " + val.last;
    });
}