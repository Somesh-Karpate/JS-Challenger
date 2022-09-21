// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function myFunction(a, b){
    let x = a.concat(b.filter((item)=>a.indexOf(item)<0));
    let y = x.sort(function(a, b){return a - b});
    return y;
}


// OR

function myFunction1(a,b){
    return [...new Set([...a,...b])].sort((x,y)=>x-y);
}