// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
function myFunction (a, b)
{
if(a.hasOwnProperty(b))
{
return true;
}
else {
return false;
}
}

// OR
// function myFunction(a, b) {
//     return b in a;
//  }