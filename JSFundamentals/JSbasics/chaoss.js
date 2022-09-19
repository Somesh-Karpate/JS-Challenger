// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a, b){
    let x = a.replace("%","");
    let y = b.replace("%","");
    let z = `${x.charAt(0).toUpperCase()}${x.slice(1)}`;
    let s = y.split("").reverse().join("");
    console.log(z + s);                      // return z + s;
}
myFunction("c%ountry","tpi%rcs");

// OR
// function myFunction(a, b) {
//     const func = x => x.replace('%','');
//     const first = func(a);
//     const second = func(b).split('').reverse().join('');
//     return first.charAt(0).toUpperCase() + first.slice(1) + second;
//   }