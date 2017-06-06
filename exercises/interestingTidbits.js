// SHORT-CIRCUIT EVALUTAION
var bob = true;

if (bob === true) {
    console.log("bob is true");
}

// OR

if (bob) {
    console.log("bob is true");
}

// OR

(bob && console.log("bob is true"));

// TERNIARY LOOPS  = condition ? expr1 : expr2
(bob ? console.log("bob is true") : console.log("bob is false"));
