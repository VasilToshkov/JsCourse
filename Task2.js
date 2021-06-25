'use strict'

//1. calcTip
function calcTip(bill) {
    return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * .20;
}

//2 
const bills = [125, 555, 44];
console.log(bills);

//3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips)

//4
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);