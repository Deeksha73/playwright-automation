let myArray =[];
let Numbers = [1,2,3,4,5];
let fruit = ["apple","banana","orange"];

let language = ["Java","Python"];
// 1. push
language.push("C");
language.push("Ruby","HTML");
console.log(language);
// 2. pop
language.pop();
console.log(language);
// 3. shift 
let firstLang = language.shift();
console.log(firstLang); //removes first element
console.log(language); //[ 'Python', 'C', 'Ruby' ]
// 4. unshift
console.log(language.unshift("Java","Python")); //It returns array length. 
console.log(language); //Adds at the beginning of the array. 
// 5. splice
let animals = ["dog","cat","tiger","elephant"];
// The first parameter is the index from which we start deleting. 
// Second is the count of elements from that index we want to delete. 
// The third is the value we want to insert instead of the deleted ones.
animals.splice(1,2,"rabbit"); 
console.log(animals); //[ 'dog', 'rabbit', 'elephant' ] It modifies the existing array. 
// 6. slice
let num = [1,2,3,4,5]
num.slice(1,4) //it includes the first index but skips the second index. It creates a new array. 
console.log(num.slice(1,4));  //[ 2, 3, 4 ]
// 7. Concat
let animal = ["dog","elephant","cat","tiger","elephant","tiger"];
let birds = ["crow","Pigeon"]
console.log(animal.concat(birds)); // returns new array
// 8. indexOf
console.log(animal.indexOf("elephant")); // returns first occurrence index, if not present -1
console.log(animal.indexOf("elephant", animal.indexOf("elephant")+1 )) //index of second elephant 
// 9. includes
console.log(animal.includes("dog"));
// 10. forEach 
animal.forEach(element => {
    console.log(element);
});