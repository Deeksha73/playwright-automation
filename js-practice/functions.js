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