for(let i = 0; i<10;i++){
    console.log(i);
}


const arr = [1,2,3,4,5];
for(const a of arr){
    console.log(a);
}

for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}

const user = {
    name:"John Doe",
    age: 28,
    city: "New York"
}
for(let key in user){
    console.log(key + " : " + user[key]);
}