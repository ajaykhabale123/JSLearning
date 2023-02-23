console.log("============ Step 1 ============");

function greaterNumber(num1,num2) {
    var result = num1>num2 ? num1: num2; 
    console.log(`The greater number is ${result}`);
}
console.log(`Given Number: 10,-10`);
greaterNumber(10,-10);
console.log(`--------------------`);
console.log(`Given Number:800,899 `);
greaterNumber(800,899);

console.log("============ Step 2 ============");
 function isEvenOrOddNum(value){
   var result= value%2==0 ? true : false;
  return result;
 }
 var resultResult = isEvenOrOddNum(29);
 console.log(`The Given Number 29 is Even : ${resultResult}`);
 var resultResult = isEvenOrOddNum(44);
 console.log(`The Given Number 44 is Even : ${resultResult}`);
 var resultResult = isEvenOrOddNum(0);
 console.log(`The Given Number 0 is Even : ${resultResult}`);
 var resultResult = isEvenOrOddNum(101);
 console.log(`The Given Number 101 is Even : ${resultResult}`);

 console.log("============ Step 3 ============");
 function wordLength (word){
    var length= word.length;
    var result = length%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var resultEven=  wordLength ("JavaScript");
 console.log(`JavScript Length is:${resultEven}`);
 var resultEven=  wordLength ("developer");
 console.log(`developer Length is:${resultEven}`);
 var resultEven=  wordLength ("Google");
 console.log(`Google Length is:${resultEven}`);