export const add = (a, b) => a + b;

export const sub = (a, b) => a - b;

export const mul = (a, b) => a * b;

export const div = (a, b) => a / b;

// To be able to use import { add, sub, mul, div } from "./src/math.js";
// export { add, sub, mul, div };

// To be able to use import math from "./src/math.js";
export default { add, sub, mul, div };
