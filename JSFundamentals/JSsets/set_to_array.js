// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

function myFunction(set){
    return Array.from(set);
}
myFunction(new Set([1, 2, 3]))
OR 

function myFunction(set) {
    return [...set];
}
myFunction(new Set('123'))