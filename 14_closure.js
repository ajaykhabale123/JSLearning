

let globalVAriable = 100;
function outer (){
    console.log("This is outer function");
    let outerFunVariable = 300;
   let inner =  function (){
    console.log("This is inner function ");
    let innerFunVariable = 500;
    console.log(innerFunVariable);
    console.log(outerFunVariable);
    console.log(globalVAriable);

    }
    return inner;
}
outer()();
// ||
const innerFun = outer();
innerFun();