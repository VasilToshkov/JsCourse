"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const orderSer = new Set(["pizza", "rissoto", "pasta", "pasta", "pizza"]);
console.log(orderSer);

console.log(orderSer.size);
console.log(orderSer.has("pizza")); //bolean
console.log(orderSer.add("pizza")); //void???
console.log(orderSer.delete("pasta"));
console.log(orderSer.delete("pasta")); //returns boolean
//console.log(orderSer.clear());//returns undifined
orderSer.add("pasta");
for (const meal of orderSer) {
  console.log(meal);
}

const staff = ["Weiter", "Chef", "Chef", "Wieter", "Manager"];
const staffSet = new Set(staff); //arr to set
console.log(staffSet);
const staffArr = [...staffSet]; // set to arr
console.log(staffSet);

///////map

const rest = new Map();
rest.set("name", "Clasico"); //key name: value clasico
console.log(rest.get("name")); //get(key) = returns the value
