//implicit conversion

// numeric string used with + gives string type

var result = '3' + 2; 
console.log(result) // "32"

var result = '3' + true; 
console.log(result); // "3true"

var result = '3' + undefined; 
console.log(result); // "3undefined"

var result = '3' + null; 
console.log(result); // "3null"


// numeric string used with - , / , * results number type

var result;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2


// non-numeric string used with - , / , * results to NaN(Not a Number)

var result;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN


// if boolean is used, true is 1, false is 0

var result;
result = '4' - true; //4 - 1
console.log(result); // 3

result = 4 + true;   //4 + 1
console.log(result); // 5

result = 4 + false;    //4 + 0
console.log(result); // 4


// null is 0 when used with number

var result;

result = 4 + null;    //4 + 0
console.log(result);  // 4

result = 4 - null;  //4 - 0
console.log(result);  // 4



// Arithmetic operation of undefined with number, boolean or null gives NaN

var result;

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN