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