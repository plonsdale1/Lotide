const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    console.log("NOT EQUAL")
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("NOT EQUAL")
      return false;
    }
  }
  console.log("EQUAL THIS TIME")
  return true;
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ASSERTION PASSED! ${actual} === ${expected} ✅✅✅`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 ASSERTION FAILED! ${actual} !== ${expected}🛑🛑🛑`);
  }
};


const without = function(array, del) {
  results1 = [];
  results2 = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== del[i]) {
      results1.push(array[i]);
    }else {
      results2.push(array[i]);
    }
  }return results1;
};


eqArrays(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]