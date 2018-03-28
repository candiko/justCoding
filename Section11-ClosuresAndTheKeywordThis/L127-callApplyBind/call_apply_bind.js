//  3. EXPLICIT BINDING  ==========================================================================
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