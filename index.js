// modules iife wrapping
// (function (exports, require, module, __filename, __dirname) {})();

const { sum, subtract } = require("./math");
const superHero = require("./super-hero");
const data = require("./data.json");

console.log("Hello world", { dirName: __dirname, fileName: __filename });

console.log(sum(1, 2), subtract(2, 1));

console.log(superHero.getName());
superHero.setName("superman");
console.log(superHero.getName());

const anotherSuperHero = require("./super-hero");
// module caching, "superman" as a result, use export a class, not an instant of class
console.log(anotherSuperHero.getName());
console.log("data :>> ", data);
