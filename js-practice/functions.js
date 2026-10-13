// 1. function declaration
function add(a,b){
return a+b;
}
console.log(add(2,3));

// 2. function expression : Anonymous function
const multiply = function(x,y){
    return (x*y);
}

console.log(multiply(5,2));

// 3. Arrow function expression : Anonymous function
const divide = (t1,t2)=>t1/t2;
console.log(divide(6,2));

// 4. Function Constructor :
const sub = new Function('a','b','return a-b;');
console.log(sub(11,1));

// 5. IIFE(immediately invoked function expression):
(function(){
    console.log("Server is up")
})();

// 6. Generator function
// function* and yield
function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
console.log(generateNumbers().next().value);

// 7. Anonymous function: -- no specific name
const number = [1,2,3,4,5];
console.log(number.map(function(e){
    return e*e;
}));
