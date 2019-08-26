const assertEqual = require("./assertEqual")


let tail = function(arr) {
  return arr.slice(1);
};




module.exports = tail;
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!