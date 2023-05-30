//turning strings into an array
var s = "one, two, three, four, five"; 
console.log(s.split(",")); 


//turning to uppercase
console.log('qwerty'.toUpperCase());

//turning to lowercase
console.log("FATHERS".toLowerCase());

//Finding the index of a character in a given string

var string = "Hello World";
console.log(string.indexOf("o"));

//slice

var s = "0123456789abcdefg"; 
console.log(s.slice(0, 5)); 


//reverse a string

function reverseString(oppor){
    return oppor.split("").reverse().join("");
}

console.log(reverseString("combine"));
console.log(reverseString("02022020"));
console.log(reverseString("messi"));


function reverseStrinng(strinng){
    var strRev="";

    for (var i=strinng.length -1; i >=0; i--){
        strRev += strinng[i];
    }
    return strRev;
}

console.log(reverseStrinng("zebra"));