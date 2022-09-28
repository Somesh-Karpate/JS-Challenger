//Write a function that takes an array of objects and astring as arguments
//Add a property with key 'continent' and value equal to the string to each of the objects
//return the new array of objects

function myfunction(arr,str){
    for(let i=0;i<arr.length;i++){
        arr[i].continent = str;
    }
    console.log(arr);
}
myfunction([{city:'tokyo',country:'japan'},{city:'Bangkok',country:'thailand'}],'Asia');
