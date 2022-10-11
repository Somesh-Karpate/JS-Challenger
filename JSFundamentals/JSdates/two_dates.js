// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

function myFunction(a, b) {
    let x = a.getTime()-b.getTime()
    let y;
    if(x<0){
        y = Math.floor(-(x)/60000);
    }else{
        y = Math.floor(x/60000);
    }
    return (y<=60)?true:false;
}
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))

OR 


function myFunction(a, b) {
    return Math.abs(a - b) / 1000 / 60 <= 60
}
myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))
