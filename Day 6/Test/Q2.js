// 2. Write a program to check whether a string is Palindrome or Not.
// Input:- “mobile”
// Output:- It is not a Palindrome
// Input:- “malayalam”
// Output:- It is a Palindrome

function Palindrome(str){
    let x=[];
    for (let i = str.length - 1; i >= 0; i--) {
        x.push(str[i]);
    }
    let rev=x.join('');
    return str === rev ? "It is a Palindrome" : "It is not a Palindrome";
}
console.log(Palindrome("mobile"));   
console.log(Palindrome("malayalam"));