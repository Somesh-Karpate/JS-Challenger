const arr1 = [1,2,3,4,5];

//indexOf                     //returns the index of specified value
console.log(arr1.indexOf(3));

//isArray                        // returns boolean if the object is an array ot not
console.log(Array.isArray(arr1));

//join                     //returns an array as a string
console.log(arr1.join("   and  "))


//lastindexof                       //returns the index of an element  starting from end/tail
console.log(arr1.lastIndexOf(2)); 


//map                               //returns a new array while satisfying the function
console.log(arr1.map((num)=>num + 2,0));


//reduce                           //if we want a single value it can be any arithmetic operation on an array we use reduce method
console.log(arr1.reduce((num1,num2)=>num1+num2,0));


//reverse and // reduceright           //reverse method reverse the element 
console.log(arr1.reverse().reduceRight((num1,num2)=>num1-num2,0));   //reduce right same as reduce but just it starts from right to left


//slice                     //returns new array who satisfy the condition
console.log(arr1.reverse().slice(1,3));

//some                                //return true if any of the condition is true
const ages = [3, 10, 18, 20];

console.log(ages.some(checkAdult));
function checkAdult(age) {
    return age > 18;
}

//splice                      // it add/removes the array element
arr1.splice(2,0,100,123);
console.log(arr1);


//toString                     // returns a string with array values separated by commas.
console.log(arr1.toString());


//valueOf                     //returns the array itself.
console.log(arr1.valueOf());