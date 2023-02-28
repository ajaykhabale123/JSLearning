console.log(`=========== Function Expression with if else statement  ============`)
var check_leap_year = function (leap_year) {
  if (
    leap_year == 'number' ||
    leap_year == undefined ||
    isNaN(leap_year) ||
    leap_year == null
  ) {
    console.log(`The ${leap_year} is: Invalid Data`)
  } else {
    if ((leap_year % 4 == 0 && leap_year % 100 != 0) || leap_year % 400 == 0) {
      console.log(`The year ${leap_year} is: Leap Year`)
    }
    else{
      console.log(`The year ${leap_year} is : Not leap year`)
    }
  }
}

check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(null);
check_leap_year('Twenty Twenty');
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(1750);
