const amount = require("./amount");
// import { amount } from "./amount";

const app = require("./lang");

const fullNames = require("./fullName");

require("./add");

console.log(amount < 10 ? "small number" : "large number");

console.log(
  `Hey, my name is ${fullNames()} and this is my first ${app} app!!!`
);
// console.log(process);
