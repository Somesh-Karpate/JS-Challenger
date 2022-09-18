//All about Javascript String 

var test = "Learning Javascript with AlmaBetter";
console.log(test.length);                                //length off string
console.log(test.slice(25));                             //break it or separate it
console.log(test.replace("Javascript","Web3.0"));        //replace it
console.log(test.toUpperCase());                          //convert to upper case
console.log(test.toLowerCase());                          //convert to lower case
console.log(`${test}Web3.0 is future`);                  //string concatenation
var hum = "Web3.0 is future";
console.log(test.concat(hum));
var result = "\"Javascript\" is object based language";   //Escape Characters
console.log(result);
console.log(result[1]);                                   //Accessing string characters
console.log(result.charAt(1));
console.log(result.indexOf("i",9));                         //gives index of a character who comes first.
console.log(result.lastIndexOf("i"));                       //starting from back to front and providing index.
console.log(result.search("object"));                       //search for specified value.
console.log(result.substring(1,7));                         //separating it
console.log(result.substr(1,7));                            //separating it till length
console.log(result.charCodeAt(1));                            //return a unicode of a character
var result1 = "     javascript       ";
console.log(result1.trim());                                //remove whitespace
var result2 = "h,e,l,l,o";
console.log(result2.split(","));                            //convert string to an array.


let name = "john";
let name1 = new String("john");                        //String as object
console.log(name);
console.log(typeof name);
console.log(name1);
console.log(typeof name1);