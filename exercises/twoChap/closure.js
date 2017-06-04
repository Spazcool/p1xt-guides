// CLOSURE

function makeAdder(x) {
    // parameter `x` is an inner variable
    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
        console.log(y, x);
        return y + x;
        // function rabbit(z) {
        //     console.log(y, x, z);
        //     return z+ y+x;
        // }
    };

    return add;
}

var plusOne = makeAdder(1);
makeAdder(2)(9);
//
// console.log(typeof plusOne);
// plusOne(3, 2);
// plusOne(5);
// console.log(x);
// console.log(plusOne);

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder(10);

plusOne(3); // 4  <-- 1 + 3
plusOne(41); // 42 <-- 1 + 41

plusTen(13);
