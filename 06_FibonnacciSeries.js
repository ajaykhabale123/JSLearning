console.log("Fibonacci Series upto 10 numbers");

const fibonacci = function (n){
    const fibArray = [0,1];
    for(let i = 2; i<=n; i++){
        fibArray.push(fibArray[i-2]+fibArray[i-1])
    }
    return fibArray;
}
console.log(fibonacci(10));
console.warn("============================");
