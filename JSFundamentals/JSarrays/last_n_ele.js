// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function myFunction(a, n){
    return a.slice(-n);        //it's just like (a.length-n)
}