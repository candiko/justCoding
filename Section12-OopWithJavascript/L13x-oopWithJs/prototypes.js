// === Prototype Property  ========================================================================
function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
	this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
	this.isRunning = false;
}

Vehicle.prototype.honk = function() {
	if(this.isRunning === true)
		return "beep";
}

var vehicle = new Vehicle("Ford", "Focus", "2015");
vehicle.isRunning;    // false
vehicle.turnOn();
vehicle.honk();       // beep
vehicle.turnOff();
vehicle.isRunning;    // false

// === Exercises  =================================================================================
// 1 - Create a constructor function for a Person.
// Each person should have a firstName, lastName, favoriteColor, favoriteNumber)
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
}

/* 2 - Add a function on the Person.prototype called fullName that
returns the firstName and lastName property of an object
created by the Person constructor concatenated together.
*/
Person.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
}

// 3 -  Add a property on the object created from the Person function called family
// which is an empty array. This will involve you adding an additional line of code
// to your Person constructor.

person.family = [];

/* 4 - Add a function on the Person.prototype called addToFamily
   which adds an object constructed from the Person constructor to the family array.
   To make sure that the object you are adding is an object construced
   from the Person constructor (HINT - take a look at the instanceof keyword).
   Make sure that your family array does not include duplicates!
   This method should return the length of the family array.
*/
Person.prototype.addToFamily = function(firstName, lastName, favoriteColor, favoriteNumber) {
	var familyMember = new Person()
	if(familyMember instanceof Person) {
		this.family.push(familyMember);
	} else {
		return familyMember + " is not an instance of Person."
	}
	return this.family.length;
}