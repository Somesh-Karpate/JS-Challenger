// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a) {
    let x = Object.values(a);
    var y = 0;
    for(let i=0;i<x.length;i++){
        y += x[i];
    }
return y;
}
myFunction({a:1,b:2,c:3});


//OR

function myFunction1(a) {
    return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}
myFunction1({j:9,i:2,x:3,z:4});