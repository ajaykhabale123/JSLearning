console.log(`===============Step 1===============`);
function squareOfWordLength(word){
    var length= word.length;
    var squareLength= word.length**2;
    console.log(`Given String: ${word}`);
    console.log(`length of String is:${length}`);
    return squareLength
    
}
var squareLengthResult= squareOfWordLength("Javascript")
console.log(`Square of Length is:${squareLengthResult}`);
console.log(`----------------------------------------`);
var squareLengthResult= squareOfWordLength("Google Chrome")
console.log(`Square of Length is:${squareLengthResult}`);
console.log(`----------------------------------------`);
var squareLengthResult= squareOfWordLength("Developer Smart")
console.log(`Square of Length is:${squareLengthResult}`);
console.log(`===============Step 2===============`);
function divideOfMulti (){
    var string= "I am Angular Developer" ;
    console.log(`Given string is: ${string}`);
    var lengthString= string.length;
    var wordString= string.split(" ");
    var noOfWord= wordString.length;
   
    console.log(`String divided by total word ${lengthString/noOfWord}`);
    console.log(`String multiply by total word ${lengthString*noOfWord}`);
}
divideOfMulti()

