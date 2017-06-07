// LET
// let = like var but scope is contained within the {}
//needs strict mode to be run here
"use strict";

var foo = true;

if (foo) {

    let bar = foo * 2;
    // bar = something( bar );
    console.log(bar);
}

console.log(bar); // ReferenceError

// ---------------------------------------------------------------------

// CONST
// const is block scoped and not able to change value
var foo = true;

if (foo) {
    var a = 2;
    const b = 3; // block-scoped to the containing `if`

    a = 3; // just fine!
    b = 4; // error!
}

console.log(a); // 3
console.log(b); // ReferenceError!
