console.log("----------Step 1----------");
console.log("*****Function with no arguments and no return type *****");
function myAdress (){
    console.log("My adress is Sangola");
}
myAdress();

function sport(){
    console.log("My favorite sport is Cricket");
}
sport();
console.log("----------Step 2----------");
function personalDetails (firstName, lastName, collegeName){
    console.log("First Name:",firstName, "Last Name:",lastName,"College Name:", collegeName);
}
personalDetails("Ajay","Khabale","COAS")
console.log("----------Step 3----------");
console.log("*****Function with arguments and no return type *****");
function swapValuesDude(value1,value2){
    console.log("Before Swap", value1, value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap:" ,value1,value2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000,2000);
console.log("----------Step 4----------");
console.log("*****Function with arguments and return type *****");
function addThreeValues(num1,num2,num3){
    var sum= num1+num2+num3;
    return sum;
}
var sumResult = addThreeValues(10.23,600,40);
console.log(sumResult);

var sumResult= addThreeValues("Hello ", "Good ", "Morning ");
console.log(sumResult);
