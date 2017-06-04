function foo(a = 2) {
    console.log(a);
}

foo(); // 2
foo(42);


function foo() {
    var a = arguments[0] !== (void 0) ? arguments[0] : 2;
    console.log(a);
}
