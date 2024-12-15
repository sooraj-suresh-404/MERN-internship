// 1. Remove duplicate elements from an array.
// Input:- const arr = [1, 2, 1, 3, 1]
// Output:- [1,2, 3]

const arr = [1,2,1,3,1];
const uniqarr=[...new Set(arr)];
console.log(uniqarr);
