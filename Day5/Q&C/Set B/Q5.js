// let str="bridgeon";
// const rev = str.split('').reverse().join('');
// console.log(rev);


// function revstr(str){
//     let newString=" ";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// let String="bridgeon";
// let rev = revstr(String);
// console.log(rev);


// let String="bridgeon";
// let x=[];
// for (let i = String.length - 1; i >= 0; i--) {
//     x.push(String[i]);
// }
// console.log(x.join(''));


let String="bridgeon";
let x=[];
let cal=rev(String);
function rev(){
    for (let i = String.length - 1; i >= 0; i--) {
        x.push(String[i]);
    }  
}
console.log(x.join(''));
