// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result


function myFunction(a, b, c) {
    let set = new Set();
    set.add(a);
    set.add(b);
    set.add(c);
    return set;
}
myFunction(NaN, null, false)