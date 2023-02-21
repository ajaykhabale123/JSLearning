var greet = "Good Morning";
console.log(typeof greet);

console.log("Total number of characters available into the string variable- greet");
var greetLength = greet.length;
console.log("Total length of string is:", greetLength);
 
console.log("Find the character by index value");
var charAtIndex3= greet.charAt(3);
console.log("Character availabale at index 3 is:", charAtIndex3);

console.log("Find the last character");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last char is:", charAtLastIndex);

console.log("Find the index by character value");
var indexOfM = greet.indexOf ("M");
console.log("Index of Char M is:", indexOfM);

console.log("Index of char which is not available into the string:", greet.indexOf("z"));

console.log("Index of O char:", greet.indexOf("o"));
console.log("Index of O char using lastIndexOf:", greet.lastIndexOf("o"));

var replaceresult= greet.replace("Morning", "Evening");
console.log(replaceresult);
console.log(greet);

console.log("Upper Case:", replaceresult.toUpperCase());
console.log("Lower Case:", replaceresult.toLowerCase());

console.log("trim method");
var myName= "    Mohit Sharma   ";
var myNameAfterTrim=myName.trim();
console.log("Removing extra start and end spaces using trim:", myNameAfterTrim,myName.length, myNameAfterTrim.length);

//find the total extra spaces removed from this string- myName
var trimmedSpace= myName.length- myNameAfterTrim.length;
console.log(trimmedSpace);

console.log(myName.trimStart(), myName.trimEnd());

console.log("Includes");
console.log("Is Substring Mor includes in the greet or not;",greet.includes("Mor"));
console.log("Is Substring Afternoon includes in the greet or not;",greet.includes("Afternoon"));
console.log("Is Substring O includes in the greet or not;",greet.includes("O"));

console.log("Slice Method");
var sliceResult= greet.slice(5,12)
console.log(sliceResult);
console.log(greet.slice(2,6));

var greet = "Good Morning my dear friend";
console.log("Split Method");
var splitResult= greet.split(" ");
console.log(splitResult, typeof splitResult);
console.log("total Words:", splitResult.length);

var myFriendList= "Billgates, Stew Job, Elon Musk, Ratan Tata, Sunar Pichai, Satya Nadella, NArayn Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var splitResult= myFriendList.split(",");
console.log(splitResult);
console.log("total Words:", splitResult.length);

var frdlist= myFriendList.split(" ");
console.log(frdlist);
console.log(frdlist.length);








