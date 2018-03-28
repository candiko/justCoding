//
// ================================================================================================
// = FOUR RULES OF 'this'  ========================================================================
// ================================================================================================
// 'this' is a reserved keyword in JavaScript and
//  determined by how a function is called: Exeuation Context.

// 1. Global
// 2. Object / Implicit
// 3. Explicit
// 4. New



// = 1. GLOBAL CONTEXT  ===========================================================================
// ================================================================================================
// When 'this' is not inside of a declared object, its value equals to GLOBAL OBJECT.

console.log(this);       // window
function whatIsThis() {
	return this;
}
whatIsThis();            // window


function variablesInThis() {
	this.person = "Elie";
}
variablesInThis();       // the keyword this inside the function is the window
console.log(person);     // Elie

// == 1.1 'use strict'  ===========================================================================
// ================================================================================================
// Writing 'use strict' makes this keyword value is undefined in functions.

"use strict"
console.log(this);       // window
function() whatIsThis() {
	return this;
}
whatIsThis();            // undefined

"use strict"
function variablesInThis() {
	this.person = "Elie";
}
variablesInThis();       // TypeError, can't set person on undefined!

// = 2. IMPLICIT/OBJECT BINDING  ==================================================================
// ================================================================================================
// When 'this' is inside of a declared object, its value equals to CLOSEST PARENT OBJECT.

// strict mode does NOT make a difference here
var person = {
    firstName: "Elie",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    }
}
person.sayHi(); // "Hi Elie"
person.determineContext(); // true

// A keyword 'this' is defined when a function is run! There is not a function being run here to
// create a new value of the keyword 'this' so the value of 'this' is still the window!
var person = {
    firstName: "Elie",
    determineContext: this;
}
person.determineContext; // window

// Nested Objects
var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }        
    }
}
person.sayHi(); // "Hi Colt"
person.determineContext(); // true
person.dog.sayHello(); // "Hello undefined"
person.dog.determineContext(); // false

// = 3. EXPLICIT BINDING  =========================================================================
// ================================================================================================
// When we use call, apply or bind to a function, we can explictly define value of 'this' as arg.

// NAME OF METHOD  PARAMETERS           INVOKE IMMEDIATELY?
// Call            thisArg,a,b,c,...    YES
// Apply           thisArg,[a,b,c,...]  YES
// Bind            thisArg,a,b,c,...    NO

// Call
var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }        
    }
}
person.dog.sayHello.call(person); // Hello Colt
person.dog.determineContext.call(person); // true


var colt = {
	firstName: "Colt",
	sayHi: function() {
		return "Hi " + this.firstName;
	}
}

var elie = {
	firstName: "Elie",
	sayHi: function() {
		return "Hi " + this.firstName;
	}
}

colt.sayHi();          // Hi Colt
elie.sayHi();          // Hi Elie
colt.sayHi.call(elie); // Hi Elie


function sayHi() {
	return "Hi " + this.firstName;
}

sayHi.call(colt);  // Hi Colt
sayHi.call(elie);  // Hi Elie