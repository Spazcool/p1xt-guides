// Invoking Function Expressions Immediately
// IIFE: Immediately Invoked Function Expression.
// foo is wrapped in () making it an expression, and scoped in on itself
// the (); that follows executes foo immediately
var a = 2;

(function foo() {
    var a = 3;
    console.log(a); // 3
})();

console.log(a); // 2

foo() // ReferenceError: foo is not defined
