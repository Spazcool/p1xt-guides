// GARBAGE COLLECTION
//BLOCK SCOPING
// keeps the big data out of memory by blockscoping it with let instead of var
// TAKE THIS:
{
    function process(data) {
        // do something interesting
    }
    var someReallyBigData = {..
    };
    process(someReallyBigData);
    var btn = document.getElementById("my_button");
    btn.addEventListener("click", function click(evt) {
        console.log("button clicked");
    }, /*capturingPhase=*/ false);
}
// VS THIS:
{
    function process(data) {
        // do something interesting
    }
    // anything declared inside this block can go away after!
    {
        let someReallyBigData = {..
        };
        process(someReallyBigData);
    }
    var btn = document.getElementById("my_button");
    btn.addEventListener("click", function click(evt) {
        console.log("button clicked");
    }, /*capturingPhase=*/ false);
}
