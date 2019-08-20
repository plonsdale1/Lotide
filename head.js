const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ASSERTION PASSED! ${actual} === ${expected} ✅✅✅`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 ASSERTION FAILED! ${actual} !== ${expected}🛑🛑🛑`);
  }
};


const head = function(arr) {
  let index = arr[0];
  return index;
};







assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");