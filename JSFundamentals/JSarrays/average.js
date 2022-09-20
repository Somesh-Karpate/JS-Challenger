// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr){
    var x = 0;
    for (let i in arr){
        x += arr[i];
    }
    let y = x/arr.length;
    return y;
}


// OR

function myFunction1(arr){
    return arr.reduce((acc,arr) => acc + arr,0)/arr.length;
}