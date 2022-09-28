// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object


function myFunction(a, b){
    var obj = {};
    for(let i =0;i<a.length;i++){
        for(let j = 0;j<b.length;j++){
            obj[a[i]]=b[i]; 
        }    
    }
return obj;
}
myFunction(['a','b','c'],[1,2,3]);


//OR

function myFunction1(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}
myFunction1(['w','x','y','z'],[10,9,5,2]);
