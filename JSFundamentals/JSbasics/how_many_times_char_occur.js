// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b){
    let result = 0;
    for(let i=0;i<b.length;i++){
        if(b[i]===a){
            result++;
        }
    }
    console.log(result);
}
myFunction('h', 'how many times does the character occur in this sentence?');


// OR
// function myFunction(a, b) {
//     return b.split(a).length - 1;
//   }