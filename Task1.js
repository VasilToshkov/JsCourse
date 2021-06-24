'use strict';
//arrow function to calculate avr Score
const calcAvarage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//use func to calc avg for both team
const avgDolphins = calcAvarage(44, 23, 71);
const avgKoalas = calcAvarage(65, 54, 49);
//3 checkWinners and log it
function checkWinners(avgTeam1, avgTeam2) {
    if (avgTeam1 >= 2 * avgTeam2) {
        console.log(`Team Dolphins wins with score (${avgTeam1} vs ${avgTeam2})`);
    } else if (avgTeam2 >= 2 * avgTeam1) {
        console.log(`Team Koalas wins with score (${avgTeam2} vs ${avgTeam1})`);
    } else {
        console.log("No winner!")
    }
}
//giving advantage for the second team as guest i guess :D
function checkWinnersNoDraws(avgTeam1, avgTeam2) {
    avgTeam1 > avgTeam2 ? console.log(`Team Dolphins wins with score (${avgTeam1} vs ${avgTeam2})`) :
        console.log(`Team Koalas wins with score (${avgTeam1} vs ${avgTeam2})`);
}
checkWinners(avgDolphins, avgKoalas);