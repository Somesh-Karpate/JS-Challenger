const arr1= new Array('a','b','c','d','e'); // another way of declaration and intialization(using new keyword)
const arr = [1,2,3,4,5]; // array declaration and intialization 

console.log(arr.length); // gives length of an array

//accessing elemenwt of an array 

console.log(arr[2]);   //array element in index 2
console.log(arr1[0]);   // array element in index 0


let x;

// inserting an element

x = arr.push(6);   //push method adds the element to the end/tail of an array
console.log(arr);
x = arr.unshift(0);   //unshift method adds the element to the first/head of an array
console.log(arr);
arr1[5]="s";      // insert an element while accessing it at index 5
console.log(arr1)

// deleting an element

x = arr.pop();      // removes/delete the last element of an array
console.log(arr);
x = arr.shift();     // removes/delete the first element from an array
console.log(arr);



