// global declaration
var x = 10;

function test(){
    // functional declaration
    var y = 20;
    console.log(y);
}

// let cannot be redeclared.
let a = 10;
let b = 5;
if(b>3){
    let a = 15;
    console.log(a);
}
console.log(a); //10

// constant  -- same as final in java
const c = 10;
// c=20; -- not allowed
console.log(c);




