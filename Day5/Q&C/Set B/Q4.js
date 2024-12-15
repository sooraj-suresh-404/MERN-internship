var n=4;
var str = '';
var count=1
for(var i=1;i<=4;i++){

    for  (let j=1;j<=i;j++){
        str=str+count;
        count++;
    }
    str+= "\n";
}
console.log(str);