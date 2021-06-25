'use strict'

//Mark miller and JohnSmith mass, height, fullname

const mark = {
    fullname: "Mark Miller",
    height: 100,
    mass: 100,
    calcBMI: function () {
        mark.BMI = this.mass / (this.height / 100) ** 2;
        return mark.BMI;
    }
}

const john = {
    fulname: "John Smith",
    height: 200,
    mass: 400,
    calcBMI: function () {
        john.BMI = this.mass / (this.height / 100) ** 2;
        return john.BMI;
    }
}

// "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
// tall
john.calcBMI();
mark.calcBMI();
if (john.BMI > mark.BMI) console.log(`${john.fulname} has BMI ${john.BMI} which is higher than ${mark.fullname}'s BMI of ${mark.BMI}`);
else if (john.BMI < mark.BMI) console.log(`${john.fulname} has BMI ${john.BMI} which is lower than ${mark.fullname}'s BMI of ${mark.BMI}`);
else console.log(`${john.fulname} has BMI ${john.BMI} which equal to ${mark.fullname}'s BMI of ${mark.BMI}`);