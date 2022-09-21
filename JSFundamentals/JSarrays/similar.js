// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function myFunction(arr){
    return arr.every(val => val === arr[0]);
}


//OR


function myFunction1(arr){
    return new Set(arr).size===1;
}