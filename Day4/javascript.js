//syncronize and asyncnize



// Array & Object
const arr=[1,5,8,9]
const obj={
    name:"abi",
    age:21,
    arr
}

console.log(obj.arr);

// for in and of

for(let x in obj){
    console.log("for in",obj[x]);
}

for(let x of obj){
    console.log("for of",obj[x]);
}

// String methods
const str = "Hello world";


// Array methods


console.log(arr.sort(a,b)=>{return b-a});

// type of functions
// function definition
// function expression
// ...etc
const sum = (a,b) => (a-b);//function

// itteration methods
// maping

sum = arr.reduce((total,val)=>total+val,0);
console.log(sum);

