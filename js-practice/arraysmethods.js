let numbers = [1,2,3];
// 1. map()
let doubleNumbers = numbers.map(e=>e*2);
console.log(doubleNumbers);

//  F->C
let fahTemp = [32,68,86,104,212];

function fahToCell(fah){
    return (fah-32)*5/9;
}

let celTemp = fahTemp.map(fahToCell);
console.log(celTemp);

// 2. filter()
let num = [1,2,3,4,5,6,7,8,9,10]
let evenNum = num.filter(e=>e%2===0);
console.log(evenNum);

let employee = [
    {name:"John", age:30, gender:"male"},
    {name:"Bob",age:35,gender:"male"},
    {name:"Lisa", age:30, gender:"female"},
    {name:"Priya",age:35,gender:"female"},
]
let result = employee.filter(e=>{return e.gender==="female"}); 
// If the condition returns true, .filter() includes that employee in the new array.
// Using {} without return returns undefined, so .filter() would produce an empty array in this case.
console.log(result);

// 3. reduce()
let numb = [1,2,3,4,5] //15
console.log(numb.reduce((acc,num)=>{return acc+num},0));

// max in the array
let top = [20,1,43,14,90];
let maximum = top.reduce((max,top)=>{
    if(top>max){
        max=top;
    }
    return max;
},top[0]);

console.log(maximum);


