var appreciate= "   Hey you are doing good, keep it up     "
console.log("**********Step 1**********");
function stringhandsOn(){
    
}
stringhandsOn();
var appreciate= "   Hey you are doing good, keep it up     ";
console.log("Given String:", appreciate);
console.log("**********Step 2**********");
var appreciatelength= appreciate.length;
console.log("Total length of string is:",appreciatelength);
console.log("**********Step 3**********");
var trimResult= appreciate.trim();
console.log("After removing Extra Spaces result:",trimResult,"|| Before trimming length:", appreciate.length,"|| After trimming length:", trimResult.length);
console.log("**********Step 4**********");
var afterTrimResult=trimResult.length;
var trimmedSpace= appreciatelength- afterTrimResult;
console.log("Total number of spaces Removed is:", trimmedSpace);
console.log("**********Step 5**********");
var firstChar= trimResult.charAt(0);
var lastChar= trimResult.charAt(trimResult.length- 1);
console.log("First Character of String is:",firstChar, "|| Last Character of String is:",lastChar);
console.log("**********Step 6**********");
var splitResult= trimResult.split(" ");
console.log("Total numbers of words:",splitResult.length);
console.log("**********Step 7**********");
var goodIndex= appreciate.indexOf("good");
console.log("Index of Word 'good' is:",goodIndex);
console.log("**********Step 8**********");
var index22= appreciate.slice(22);
console.log("Substring starting from index22 is:", index22);
console.log("**********Step 9**********");
var includesUp= trimResult.endsWith("up");
console.log("String ends with word 'up':",includesUp);
console.log("**********Step 10**********");
var includesHey= trimResult.startsWith("Hey");
console.log("String starts with word 'Hey':",includesHey);
