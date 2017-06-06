//bar copies foo and the way its info is stored, so even though it doesn't have
// prop a it searches its parent for that prop and steals it
var foo = {
    a: 42
};

// create `bar` and link it to `foo`
var bar = Object.create(foo);

bar.b = "hello world";
// bar.a = 25;
console.log(bar.b); // "hello world"
console.log(bar.a); // "42
console.log(typeof bar);
console.log(foo.b);
