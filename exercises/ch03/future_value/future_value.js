"use strict";
let goagain = "y";
let errorcheck = 0;
do{
// get investment amount - loop until user enters a number
let investment = 0;
errorcheck = 0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) || investment < 0);

// get interest rate - loop until user enters a number
let rate = 0;
errorcheck = 0;
do {
    if (errorcheck == 1){
      rate = parseFloat(prompt("Error: Enter interest rate as xx.x", 7.5));  
    }
    else {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    errorcheck = 1; }
}
while ( isNaN(rate) || rate < 0 || rate >= 15);

// get number of years - loop until user enters a number
errorcheck = 0;   
let years = 0;
do {
    years = parseInt(prompt("Enter number of years", 10));
}
while ( isNaN(years) || years < 0 );

// calulate future value
    document.write(`<h4>Investment amount = ${investment} Interest rate = ${rate} Years = ${years}</h4>`);
let futureValue = investment;
for (let i = 1; i <= years; i++ ) {
   let intr = futureValue * rate / 100;
    futureValue = futureValue + intr;
    document.write(`<p>year = ${i} interest = ${intr.toFixed(2)} value = ${futureValue.toFixed(2)}</p>`);
}

// display results

//document.write(`<h4>Future Value: ${futureValue.toFixed(2)}</h4>`);

goagain = String (
prompt("go again y/n","y"));
} 


while (goagain != "n");