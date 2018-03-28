// ================================================================================================
// === CONST ======================================================================================
// ================================================================================================
var firstInstructor = "Colt";
firstInstructor = "Elie";          // no problem here

const anotherInstructor = "Tim";
anotherInstructor = "Elie";        // TypeError
const anotherInstructor = "Elie";  // Syntax Error

// 'const' can NEVER REDECLARE!

const numbers = [1,2,3,4];
numbers.push(10);         // 5
numbers;                  // [1,2,3,4,10]
numbers = "no!"           // TypeError


// ================================================================================================
// === LET ========================================================================================
// ================================================================================================
let anotherInstructor = "Tim";
anotherInstructor = "Elie";        // No problems here

let anotherInstructor = "Tim"      // SyntaxError

// 'let' can reassign, can not redeclare

// === SCOPE with LET =============================================================================
var instructor = "Elie";
if (instructor === "Elie") {
    let funFact = "Plays the cello";
    var funFact2 = "Cannot play";
}
funFact;  // ReferenceError!
funFact2; // "Cannot play"

// Blocks create scope!

// === HOISTING with LET ==========================================================================
function helloInstructor() {
    return elie;
    var elie = "ME!";
}

helloInstructor();   // undefined

function helloSecondInstructor() {
    return colt;
    let colt = "HIM!";
}

helloSecondInstructor()  // ReferenceError

// let does hoist, but we can not access the value - it is in a TDZ (Temporal Dead Zone)

// === HOISTING with LET ==========================================================================
for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// 5 (five items)

for(let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// 0
// 1
// 2
// 3
// 4

for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i)
}