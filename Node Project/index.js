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
import _ from "lodash";
// var _ = require("lodash");
var numbers = [1, 2, 3, 4];
var listOfNumbers = "";

listOfNumbers = _.chunk(numbers, 2);
console.log(listOfNumbers);
