// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a){
    var count = 0;
    for(let i in a){
        if(a[i]<0){
            count++;
        }
    }
return count;
}

// OR

function myFunction1(a){
    return a.filter((cur)=>cur < 0).length;
} 