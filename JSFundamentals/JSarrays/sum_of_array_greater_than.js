//write a program which contains array and number 
//return sum of the elements of array 
//which is greater than number. 

let a = [1,2,3,4,5,6,7];
let b = 2;
var sum = 0;
for(let i in a){
    if(a[i]>2){
        sum += a[i];
    }
}
console.log(sum);