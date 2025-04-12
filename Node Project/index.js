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
