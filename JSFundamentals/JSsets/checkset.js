// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

function myFunction(set, val){
    console.log(set.has(val));
}
myFunction(new Set([1, 2, 3]), 2)