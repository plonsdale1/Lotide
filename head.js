// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ ASSERTION PASSED! ${actual} === ${expected} ✅✅✅`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 ASSERTION FAILED! ${actual} !== ${expected}🛑🛑🛑`);
//   }
// };
const assertEqual = require("./assertEqual");

const head = function(arr) {
  let index = arr[0];
  return index;
};




module.exports = head;


