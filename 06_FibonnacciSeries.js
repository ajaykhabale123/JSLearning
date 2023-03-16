console.log("Fibonacci Series upto 15 numbers");
let n1= 0, n2= 1, nextterm
function fibonocci(number) {
for (let index = 1; index <=number; index++) {
    console.log(n1);
    nextterm = n1 + n2;
    n1=n2;
    n2=nextterm
}
}
fibonocci(15);

