console.log("========== Assignment AA: 06_for_string_assign.js ==========");
console.log("---------- Step 1 ----------");
var str1= "JavaScript is the language Of Internet";
var str2= "I am Angular Developer";
var str3= "Hard work and commitment is the key of success"

var countVowels = function (vowels) {
    var string= vowels.toLowerCase();
    count = 0;
   
    for (let index = 0; index < vowels.length; index++) {
        var char = string.charAt(index);
        if (char=="a"||char=="e"||char=="i"||char=="o"||char=="u") {
            count= count+1;
        }
        
    }
    return count;
} 
var result= countVowels(str1);
console.log(`1.1 The Given string is "${str1}" & it has "${result}" no. of vowels.`);

var result= countVowels(str2);
console.log(`1.2 The Given string is "${str2}" & it has "${result}" no. of vowels.`);

var result= countVowels(str3);
console.log(`1.3 The Given string is "${str3}" & it has "${result}" no. of vowels.`);

console.log("======================================================================");

console.log("---------- Step 2 ----------");
function lastWordCharsCount(word) {
    var count= 0;
    for (let index = word.length-1 ; index >0 ; index--) {
        
        if (word[index]==" ") {
            break;
        }
        count= count+1
    }
    return count;
}

var result=lastWordCharsCount(str1);
console.log(`2.1 The Given string is "${str1}" & The last word count is : "${result}".`);

var result=lastWordCharsCount(str2);
console.log(`2.2 The Given string is "${str2}" & The last word count is : "${result}".`);

var result=lastWordCharsCount(str3);
console.log(`2.3 The Given string is "${str3}" & The last word count is : "${result}".`);
