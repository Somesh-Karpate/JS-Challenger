// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array
function myFunction(a, b){
    for(let i in a){
        if(a[i]===b){
            var x = a.splice(i,1);
        }
    }
return a;
}
myFunction([1,2,3],2);


// OR


function myFunction1(a, b){
    return a.filter((cur)=>cur !== b);   //filter method returns the element which satisfy the condition 
}
myFunction1([1,2,3],2);