'use strict'

//1. calcTip
function calcTip(bill) {
    return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * .20;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 53];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}


const calcAvarage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const avg = sum / arr.length;
    return avg;
}

console.log(bills, tips, totals, calcAvarage(tips));


