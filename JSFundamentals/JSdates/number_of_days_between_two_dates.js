// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates


function myFunction(a, b) {
    let x = b.getTime() - a.getTime();
    if(x<0){
        var y = Math.ceil(-(x)/(1000*60*60*24));
    }else{
    var y = Math.ceil(x/(1000*60*60*24));
    }
    return y;
}
myFunction(new Date('2020-06-11'), new Date('2020-06-01'))



OR 

function myFunction(a, b) {
    const dif = Math.abs(a - b);
    return dif / 1000 / 60 / 60 / 24
}
myFunction(new Date('2000-01-01'), new Date('2020-06-01'))