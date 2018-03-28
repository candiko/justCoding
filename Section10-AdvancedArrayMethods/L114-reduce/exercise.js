// arr.reduce()
// Reduce Lecture - Part 1

var arr = [1, 2, 3, 4, 5];

arr.reduce(function(accumulator, nextValue, index, array) {
	var iterationNo = index;
	if (iterationNo === 1) {
		var numStr = "st";
	} else if (iterationNo === 2) {
		var numStr = "nd";
	} else if (iterationNo === 3) {
		var numStr = "rd";
	} else {
		var numStr = "th";
	}
	console.log("=== " + iterationNo + numStr + " iteration ===========================================");
	console.log("Accumulator is " + accumulator + ",");
	console.log("Next Value is " + nextValue + ",");
	console.log("Index is at " + index + ",");
	console.log("Let's see the array: " + array + ".");	
	console.log("End of " + iterationNo + " iteration.");
	return accumulator + nextValue;
});

/*
This is how it should be on console:

=== 1st iteration ===========================================
	Accumulator is 1,
	Next value is 2,
	Index is at 1,
	Let's see the array: 1,2,3,4,5.
	End of 1 iteration.
=== 2nd iteration ===========================================
	Accumulator is 3,
	Next value is 3,
	Index is at 2,
	Let's see the array: 1,2,3,4,5.
	End of 2 iteration.
=== 3rd iteration ===========================================
	Accumulator is 6,
	Next value is 4,
	Index is at 3,
	Let's see the array: 1,2,3,4,5.
	End of 3 iteration.
=== 4th iteration ===========================================
	Accumulator is 10,
	Next value is 5,
	Index is at 4,
	Let's see the array: 1,2,3,4,5.
	End of 4 iteration.
	15

*/

var arr = [1, 2, 3, 4, 5];

arr.reduce(function(accumulator, nextValue, index, array) {
	var iterationNo = index + 1;
	if (iterationNo === 1) {
		var numStr = "st";
	} else if (iterationNo === 2) {
		var numStr = "nd";
	} else if (iterationNo === 3) {
		var numStr = "rd";
	} else {
		var numStr = "th";
	}
	console.log("=== " + iterationNo + numStr + " iteration ===========================================");
	console.log("Accumulator is " + accumulator + ",");
	console.log("Next Value is " + nextValue + ",");
	console.log("Index is at " + index + ",");
	console.log("Let's see the array: " + array + ".");	
	console.log("End of " + iterationNo + " iteration.");
	return accumulator + nextValue;
}, 10);

/*
This is how it should be on console:

=== 1st iteration ===========================================
	Accumulator is 10,
	Next value is 1,
	Index is at 0,
	Let's see the array: 1,2,3,4,5.
	End of 1 iteration.
=== 2nd iteration ===========================================
	Accumulator is 11,
	Next value is 2,
	Index is at 1,
	Let's see the array: 1,2,3,4,5.
	End of 2 iteration.
=== 3rd iteration ===========================================
	Accumulator is 13,
	Next value is 3,
	Index is at 2,
	Let's see the array: 1,2,3,4,5.
	End of 3 iteration.
=== 4th iteration ===========================================
	Accumulator is 16,
	Next value is 4,
	Index is at 3,
	Let's see the array: 1,2,3,4,5.
	End of 4 iteration.
=== 5th iteration ===========================================
	Accumulator is 20,
	Next value is 5,
	Index is at 4,
	Let's see the array: 1,2,3,4,5.
	End of 5 iteration.
	25

*/

var arr = ["Daris", "Calinor", "Luthiela", "Daemar"];

arr.reduce(function(accumulator, nextValue, index, array) {
	var iterationNo = index;
	if (iterationNo === 1) {
		var numStr = "st";
	} else if (iterationNo === 2) {
		var numStr = "nd";
	} else if (iterationNo === 3) {
		var numStr = "rd";
	} else {
		var numStr = "th";
	}
	console.log("=== " + iterationNo + numStr + " iteration ===========================================");
	console.log("Accumulator is " + accumulator + ",");
	console.log("Next Value is " + nextValue + ",");
	console.log("Index is at " + index + ",");
	console.log("Let's see the array: " + array + ".");	
	console.log("End of " + iterationNo + " iteration.");
	return accumulator + nextValue;
});

/*
This is how it should be on console:

=== 1st iteration ===========================================
	Accumulator is Daris,
	Next value is Calinor,
	Index is at 1,
	Let's see the array: Daris,Calinor,Luthiela,Daemar.
	End of 1 iteration.
=== 2nd iteration ===========================================
	Accumulator is DarisCalinor,
	Next value is Luthiela,
	Index is at 2,
	Let's see the array: Daris,Calinor,Luthiela,Daemar.
	End of 2 iteration.
=== 3rd iteration ===========================================
	Accumulator is DarisCalinorLuthiela,
	Next value is Daemar,
	Index is at 3,
	Let's see the array: Daris,Calinor,Luthiela,Daemar.
	End of 3 iteration.
	"DarisCalinorLuthielaDaemar"

*/

var arr = ["Daris", "Calinor", "Luthiela", "Daemar"];

arr.reduce(function(accumulator, nextValue, index, array) {
	var iterationNo = index + 1;
	if (iterationNo === 1) {
		var numStr = "st";
	} else if (iterationNo === 2) {
		var numStr = "nd";
	} else if (iterationNo === 3) {
		var numStr = "rd";
	} else {
		var numStr = "th";
	}
	console.log("=== " + iterationNo + numStr + " iteration ===========================================");
	console.log("Accumulator is " + accumulator + ",");
	console.log("Next Value is " + nextValue + ",");
	console.log("Index is at " + index + ",");
	console.log("Let's see the array: " + array + ".");	
	console.log("End of " + iterationNo + " iteration.");
	return accumulator + nextValue;
}, "Hello");

/*
This is how it should be on console:

=== 1st iteration ===========================================
	Accumulator is Hello,
	Next value is Daris,
	Index is at 0,
	Let's see the array: Daris,Calinor,Luthiela,Daemar.
	End of 1 iteration.
=== 2nd iteration ===========================================
	Accumulator is HelloDaris,
	Next value is Calinor,
	Index is at 1,
	Let's see the array: Daris,Calinor,Luthiela,Daemar.
	End of 2 iteration.
=== 3rd iteration ===========================================
	Accumulator is HelloDarisCalinor,
	Next value is Luthiela,
	Index is at 2,
	Let's see the array: Daris,Calinor,Luthiela,Daemar.
	End of 3 iteration.
=== 4th iteration ===========================================
	Accumulator is HelloDarisCalinorLuthiela,
	Next value is Daemar,
	Index is at 3,
	Let's see the array: Daris,Calinor,Luthiela,Daemar.
	End of 4 iteration.
	"HelloDarisCalinorLuthielaDaemar"

*/

var arr = [5,4,1,4,5];

arr.reduce(function(accumulator, nextValue) {
	if(nextValue in accumulator) {
		accumulator[nextValue]++;
	} else {
		accumulator[nextValue] = 1;
	}
	return accumulator;
}, {});

//sumOddNumbers


function sumOddNumbers(arr) {
	return arr.reduce(function(accumulator, nextValue) {
		if(nextValue % 2 !== 0) {
			accumulator += nextValue;
		}
		return accumulator;
	}, 0);
}

sumOddNumbers([1,2,3,4,5]);

function createFullName(arr) {
	return arr.reduce(function(accumulator, nextValue) {
		accumulator.push(nextValue.first + " " + nextValue.last);
		return accumulator;
	}, []);
}

createFullName([{first: "Colt", last: "Steele"}, {first: "Matt", last: "Lane"}]);

/*
Write a function called extractValue which accepts an array of objects and a key and
returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key){
    return arr.reduce(function(acc, nextValue){
    	acc.push(nextValue[key]);
    	return acc;
    }, []);
}

/*
Write a function called vowelCount which accepts a string and
This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

*/

function vowelCount(str){
	var vowels = "aeiou";
	return str.toLowerCase().split("").reduce(function(acc, next) {
		if(vowels.indexOf(next) !== -1) {
			if(acc[next]) {
				acc[next]++;
			} else {
				acc[next] = 1;
			}
		}
		return acc;
	}, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and
returns the array of objects passed to it with each object now including the key and
value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next) {
    	next[key] = value;
    	acc.push(next);
    	return acc;
    }, []);
}

/*
Write a function called partition which accepts an array and a callback and
returns an array with two arrays inside of it.
The partition function should run the callback function on each value in the array
and if the result of the callback function at that specific value is true,
the value should be placed in the first subarray.
If the result of the callback function at that specific value is false,
the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback){
    return arr.reduce(function(acc, next) {
    	if(callback(next)) {
    		acc[0].push(next);
    	} else {
    		acc[1].push(next);
    	}
    	return acc;
	    	
    }, [[], []]);
}