function weekDay (day){
    switch (day) {
        case 1:
            console.log(`Day of the week is ${day}: Monday`);
            console.log(`Monday is the start day of the week`);
            break;
        case 2:
            console.log(`Day of the week is ${day}: Tuesday`);
            break; 
        case 3:
            console.log(`Day of the week is ${day}: Wed`);
            break;
        case 4:
            console.log(`Day of the week is ${day}: Thur`);
            break;
        case 5:
            console.log(`Day of the week is ${day}: Fri`);
            break;
        case 6:
            console.log(`Day of the week is ${day}: Sat`);
            break;
        case 7:
            console.log(`Day of the week is ${day}: Sun`);
            break;    
        default:
            console.log(`Invalid Day : ${day}`);
            break;
    }

}
weekDay(1);
weekDay(2);
weekDay(3);
weekDay(4);
weekDay(5);
weekDay(6);
weekDay(7);
weekDay(0);
weekDay(null);
weekDay(100);
weekDay(undefined);
weekDay(-5);