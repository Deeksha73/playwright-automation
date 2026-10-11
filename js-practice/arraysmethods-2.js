// 1. every()
let num = [2,4,6,8,10];
let answer = num.every((e=>{
    return e<50
}))
console.log(answer);

// 2. some() 
let number = [1,2,3,4,5];
console.log(number.some(e=>e%2==0))

