// 1. every()
let num = [2,4,6,8,10];
let answer = num.every((e=>{
    return e<50
}))
console.log(answer);

// 2. some() 
let number = [1,2,3,4,5];
console.log(number.some(e=>e%2==0));

// 3. find() -- gives first element that satisfies the given condition
let total = [10,3,14,5,6,1];
console.log(total.find(e=>e%2==0))

// 4. indexOf() -- -1 if not present


// 5. lastIndexOf() -- 
let total_num = [10,3,14,5,6,1,3];
console.log(total_num.lastIndexOf(3))

// 6. reverse()

// 7. sort()


