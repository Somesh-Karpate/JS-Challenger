// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

function myFunction(a, b) {
    const set = new Set([...a,...b]);
    return set;
}
myFunction(new Set('123'), new Set('234'))

OR 

function myFunction(a, b) {
    const result = new Set(a);
    b.forEach((el) => result.add(el));
    return result;
}
myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))

