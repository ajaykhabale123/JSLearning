console.log(`============ Switch Case ============`);
function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`The ${monthNumber}st  month of the year is: January`);
            break;
        case 2:
            console.log(`The ${monthNumber}nd  month of the year is: February`);
            break;
        case 3:
            console.log(`The ${monthNumber}rd  month of the year is: March`);
            break;
        case 4:
            console.log(`The ${monthNumber}th  month of the year is: April`);
            break;
        case 5:
            console.log(`The ${monthNumber}th  month of the year is: May`);
            break;
        case 6:
            console.log(`The ${monthNumber}th  month of the year is: June`);
            break;
        case 7:
            console.log(`The ${monthNumber}th  month of the year is: July`);
            break;
        case 8:
            console.log(`The ${monthNumber}th  month of the year is: August`);
            break;
        case 9:
            console.log(`The ${monthNumber}th  month of the year is: September`);
            break;
        case 10:
            console.log(`The ${monthNumber}th  month of the year is: October`);
            break;
        case 11:
            console.log(`The ${monthNumber}th  month of the year is: November`);
            break;
        case 12:
            console.log(`The ${monthNumber}th  month of the year is: December`);
            break;
            default:
            console.log(`The ${monthNumber} month is Invalid. Please Provide the valid Number of month`);
            break;

            
    }
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);