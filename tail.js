const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ASSERTION PASSED! ${actual} === ${expected} ✅✅✅`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 ASSERTION FAILED! ${actual} !== ${expected}🛑🛑🛑`);
  }
};

let tail = function(arr) {
  return arr.slice(1, 3);
};



const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!