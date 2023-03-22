console.warn("================ Map Method Assignment A ================");
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("Given Array : ", arrayNumbers);
console.warn("------------ Condition 1] ==> Add 10 into each element ------------");
const addArray = arrayNumbers.map(arrayNumbers => arrayNumbers+10 )
console.log(addArray);
console.warn("------------ Condition 2] ==> Square the each element ------------");
const squareArray = arrayNumbers.map(arrayNumbers => arrayNumbers**2)
console.log(squareArray);
console.warn("------------ Condition 3] ==> Add the index value ------------");
const indexValue = arrayNumbers.map((numbers, index) => {
    return numbers + index
});
console.log(indexValue);