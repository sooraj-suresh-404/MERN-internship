
//3. Find the largest element of an array.
// Input:- const arr = [1, 4, 7, 3, 6]
// Output:- 7

// const arr1 =[1,4,7,3,6];
// let sorted =(arr1.sort((a, b) => a - b));
// console.log(arr1[arr1.length-1]);//out put:7

const arr1 =[1,4,7,3,6];
const larg= Math.max(...arr1);
console.log(larg);
