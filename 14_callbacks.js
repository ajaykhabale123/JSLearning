function doAssignment (callback){
    //Ajay
    console.log("Solving Assignments");
    console.log("Step 1 to 10 all aera solved now");
    callback();
}
function copyAssignment (){
    //Ajinkya
    console.log("Thank you Ajju, let me copy assignments");
    console.log("Ohh finally copied all assignment");
}
doAssignment(copyAssignment);

function greet (){
    console.log("Good Mmorning......");
}

// 1 sec = 1000 milli seconds
// 3 sec = 3000 milli seconds
setTimeout(greet, 4000);

function firstclass (){
    console.log("We can return function from another function");
    function innerFunction (){
        console.log("Inner Function");
    }
    return innerFunction
 }
const inner = firstclass()
 inner();
firstclass()();
