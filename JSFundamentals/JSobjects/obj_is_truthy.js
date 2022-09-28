// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise


function myFunction(a, b) {
    if(a[b] !== null && a[b] !== undefined && a[b] !== false){
        return true;
    }else{
        return false;
    }
}
myFunction({a:1,b:2,c:3},'b');

//OR

function myFunction1(a, b) {
    return Boolean(a[b]);
}
myFunction1({x:'a',y:null,z:'c'},'y');

