function show(){//no argument with no return value

}
show();

function show(company, arg){//with argument and return value
    console.log(company, arg );
    return company+arg
}
let result = show("Codemind", 100 );
console.log(result);

//function expression
let display = function(arg1, arg2, arg3){
    return "success";
}
display ("codemind", 100, "Pune")

//operator-unary,binary, ternary
//Arithmetic==> +,-,/,%,*,++,--
//Assignment==>=,+=,-=,/=,*=
//Comparison==>  ==,===,
//logical operators==> &&, ||, !

let num1= "100";
let numFormat = +num1;
console.log(numFormat, typeof numFormat);


const num3= 100;
if(num3>=0 && num3%2==0){
console.log(true);
}