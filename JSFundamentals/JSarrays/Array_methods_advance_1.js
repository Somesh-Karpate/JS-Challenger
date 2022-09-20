const arr1 = [1,2,3];
const arr2 = ['a','b','c'];

//concat
console.log(arr1.concat(arr2));     // concatenating/merging one array into another

//copywithin
console.log(arr2.copyWithin(2,1));  // copywithin copies the element and replace other element within it

let  x;


//entries
x = arr2.entries();                // it iterate array with key value pair
for (let i in arr2){
    console.log(i);
} 


//every
x = arr1.every(check);       //executes a function for each array element
function check(num){
    console.log(num>1);
}


const arr3 = [18,21,35];
//fill
console.log(arr3.fill("a"));     // fills the array with 'a' elemnt



//filter
const ages = [32, 33, 16, 40];                   // returns the new array who satisfies the condition
console.log(ages.filter(checkAdult));

function checkAdult(age) {
    return age >= 18;
}


//find
//returns the value of first element who passes the test
console.log(ages.find(check1));
function check1(age){
    return age > 18;
}



//findindex
//returns the index of first element who passes the test
console.log(ages.findIndex(check1));
function check1(age){
    return age > 18;
}




//forEach
//calls a function who traverse an array(each element)
let text = "";
arr2.forEach(check2);
console.log(text);
function check2(item,index){
    text += index + ":" + item + "\n"; 
}



//from                          // this method helps to convert a string into array
let g = "SOMESH";
let h = Array.from(g);
console.log(h);



//includes                   //simply return boolean values if specidifed value is present or not
let j = arr2.includes("c");
console.log(j);