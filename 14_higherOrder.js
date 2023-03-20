

function doHomework (callback){
    console.log("Doing HomeSwork...");
    console.log("Finally Homework is completed...");
    callback()
    let  submitHomework= function(){
    console.log("Hey we both completed homework");
    console.log("Let us submit please");
    }
    return submitHomework;
}
function copyHomework (){
    console.log("Copying homework...");
    console.log("Thank You, I copied Homework");
}
let submit = doHomework(copyHomework)
submit()