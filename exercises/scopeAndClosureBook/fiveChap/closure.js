// Here's a down-n-dirty definition of what you need to know to understand and recognize closures:
// Closure is when a function is able to remember and access its lexical scope
//even when that function is executing outside its lexical scope.

function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }

    return bar;
}

var baz = foo();

baz(); // 2 -- Whoa, closure was just observed, man.

// OR =========================================================================
function foo() {
    var a = 2;

    function baz() {
        console.log(a); // 2
    }

    bar(baz);
}

function bar(fn) {
    fn(); // look ma, I saw closure!
}

// OR===========================================================================
// I THINK THE VAR DECLARATION AND THE ASSINMENTS ALL THE WAY UP TO 6
// IS BEING PREPROSSESED BY THE ENGINE, ESSENTIALLY HANDING A 6 TO setTimeout
// TO USE FIVE TIMES
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}

// VS=============================================================================
// I THINK THE VARS ARE STILL DECLAED BY THE ENGINE, EVEN j HERE, BUT BECAUSE IT
// IS ENCLOSED IN FUNCTION IT IS ONLY BEING DEFINED WHEN THAT FUNCTION IS CALLED
// j GETS TO CLIMB UP TO THE FINAL VALUE IN THE LOOP
for (var i = 1; i <= 5; i++) {
    (function() {
        var j = i;
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })();
}
// VS================================================================================
// APPARENTLY let IS DECLARED EACH ITARATION OF THE LOOP, AS OPPOSED TO WHEN THE ENGINE
// COMPILES ALL OF THE DECLARATIONS, ALLOWING THIS EASIER TO READ AND understand CODE
for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}
