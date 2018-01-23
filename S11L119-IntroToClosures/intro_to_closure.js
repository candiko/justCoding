//Intro to Closures

/*
=== Definition =======================
======================================

A closure is a function that makes use of variables defined in outer functions that have
previously returned.

*/

function outer() {
	var start = "Closures are";
	return function inner() {
		return start + " " + "awesome.";
	}
}

function outer(a) {
	return function inner(b) {
		return a+b;
	}
}

outer(5)(5);

function outerFn() {
	var data = "something from outerFn";
	var fact = "Remember me1";
	return function innerFn() {
		debugger
		return fact;
	}
}

function counter() {
	var count = 0;
	return function() {
		count++
		return count;
	}
}

function classRoom() {
	var instructors = ["Elie", "Colt"]
	return {
		getInstructors: function() {
			return instructors;
		},
		addInstructors: function(instructor) {
			instructors.push(instructor);
			return instructors;
		}
	}
}

function classRoom() {
	var instructors = ["Elie", "Colt"]
	return {
		getInstructors: function() {
			return instructors.slice();
		},
		addInstructors: function(instructor) {
			instructors.push(instructor);
			return instructors.slice();
		}
	}
}