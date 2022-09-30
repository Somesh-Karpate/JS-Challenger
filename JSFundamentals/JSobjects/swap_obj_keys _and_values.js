// write a function that takes obj as an argument
//somehow properties of object got mixed up
//swap the object keys with values and return the object


function myFunction(obj){
    let newObj = {};
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            newObj[obj[i]]=i;
        }
    }console.log(newObj);
}
myFunction({a:1,b:2,c:3})

//OR


function myFunction1(obj){
    console.log(Object.fromEntries(Object.entries(obj).map(([k,v])=>[v,k])));
}
myFunction1({a:1,b:2,c:3})