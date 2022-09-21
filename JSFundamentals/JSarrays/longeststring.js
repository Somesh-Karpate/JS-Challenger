// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr){
    var max = arr[0].length;
    var ans = arr[0];
    for(let i in arr){
        var mix = arr[i].length;
        if(mix >max){
            ans = arr[i];
            max = mix
        }
    }
return ans;
}

//oR


function myFunction1(arr){
    return arr.reduce((a,b)=>a.length<=b.length?b:a);
}