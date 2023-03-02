
var reverseString = function (str){
    var reverse = "";
    for (let index = str.length-1 ; index>=0 ; index--) {
        var charAt= str.charAt(index);
        reverse= reverse + charAt;   
    }
    return reverse;
}
var result = reverseString("Do it anyhow")
console.log(`Reverse String is: ${result}`);



var reverseStr = function (str){
    var reverse = "";
    for (let index = str.length-1 ; index>=0 ; index--) {
        var char= str.charAt(index);
        if (char ==" ") {
            break;
        }
        reverse= reverse + char;   
    }
    return reverse;
}
var result = reverseStr("Do it anyhow")
console.log(`Reverse last word is: ${result}`);


// "I am Angular  champ"
var str = "I am Angular  champ";
var count= 0
for (let index = 0; index< str.length ; index++) {
      
      var char = str.charAt(index);
      if (char==" ") {
        count = count +1
      }
}
console.log("Total no of spaces is ", count);

