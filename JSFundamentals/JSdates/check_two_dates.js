// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise


function myFunction(a, b) {
    let x = a.getTime();
    let y = b.getTime();
    return (x==y) ? true : false ; 
}
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
