// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f)
{
let v = ((((a + b)-c)*d)/e);    //(((((a+b)-c)*d)/e)**f);
let x = Math.pow(v,f);
return x;
}