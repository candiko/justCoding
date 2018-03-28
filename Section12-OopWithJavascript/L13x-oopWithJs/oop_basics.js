// ================================================================================================
// === OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT  =================================================
// ================================================================================================

// === Constructor Functions  =====================================================================
function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

var firstHouse = new House(2,2,1000);

// 1. Capilization of the function name - this is convention!
// 2. Usage of the keyword 'this'
// 3. We are attaching proporities onto the keyword 'this'.

// === 'new' Key Word Does  =======================================================================
// 1. Creates a new empty object.
// 2. Sets the keyword 'this' to be that empty object.
// 3. Adds the line 'return this' to the end of the function.
// 4. Adds a property onto empty object called '__proto__', which links the prototype property
//    on the constructor function to the empty object.

// Exercise
function Dog(name, age) {
	this.name = name;
	this.age = age;
	this.bark = function() {
		console.log(this.name + " just barked!");
	}
}

var rusty = new Dog("Rusty", 3);  // Rusty just barked!
var fido = new Dog("Fido", 1);    // Fido just barked!

// === Multiple Constructors  =====================================================================
function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}

function Motorcycle(make, model, year) {
	Car.call(this, make, model, year);
	this.numWheels = 2;
}

function Motorcycle(make, model, year) {
	Car.apply(this, [make, model, year]);
	this.numWheels = 2;
}

// === Exercises  =================================================================================

// PART 1

// Create a constructor function for a Person,
// each person should have a firstName, lastName, favoriteColor and favoriteNumber.
// Your function MUST be named Person.

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
}

// Write a method called multiplyFavoriteNumber that takes in a number and
// returns the product of the number and
// the object created from the Person functions' favorite number.

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(num) {
		return num * this.favoriteNumber;
	};
}

// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
	Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}