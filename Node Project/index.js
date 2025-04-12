import { hello } from "./modules/greeting.js";

import math from "./modules/math.js";
// Or destructure the exported object into only properties you need
import { add, sub } from "./modules/math.js";

console.log("Hello World!");
hello();

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(math.mul(1, 2));
console.log(math.div(1, 2));

////////////////////////lodash exercise////////////////////////////
/////////////////////////////////////////////Part 1////////////////////////////////////////
//https://www.tutorialspoint.com/lodash/lodash_chunk.htm
import _ from "lodash";
// var _ = require("lodash");
var numbers = [1, 2, 3, 4];
var listOfNumbers = "";

listOfNumbers = _.chunk(numbers, 2);
console.log(listOfNumbers);

/////////////////////////////////////////////Part 2/////////////////////////////////////////
//https://www.tutorialspoint.com/lodash/lodash_shuffle.htm
var list = [1, 2, 3, 4, 5];
var result = _.shuffle(list);
console.log(result);

/////////////////////////////////////////////Part 3/////////////////////////////////////////
//https://www.tutorialspoint.com/lodash/lodash_uniq.htm
var numbers = [1, 2, 2, 4];
var result = _.uniq(numbers);
console.log(result);

/////////////////////////////////////////////Part 4/////////////////////////////////////////
//https://www.tpointtech.com/nodejs-lodash-sortby-function
const elements = [
  { name: "John", age: 30 },
  { name: "Peter", age: 25 },
  { name: "Joseph", age: 35 },
];
// Sorting users by the name.
const sortingByName = _.sortBy(elements, "name");
console.log(sortingByName);
// Sorting users by the age.
const sortingByAge = _.sortBy(elements, "age");
console.log(sortingByAge);

////////////////////////////////////////////Part 4////////////////////////////////////////
