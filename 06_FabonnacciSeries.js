console.log("Fibonacci Series upto 10 numbers");

const fibonacci = function (n){
    const fibArray = [0,1];
    for(let index = 2; index<=n; index++){
        fibArray.push(fibArray[index-2]+fibArray[index-1])
    }
    return fibArray;
}
console.log(fibonacci(10));
console.log("============================");

function fabSeries(fabTerm){
    let first = 0;
    let second = 1;
    let next = 0;
    for (let index = 1; index <= fabTerm; index++) {
     console.log(first);   
      next = first + second; 
      first = second;
      second = next;  
    }
}
fabSeries(7);


