



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ASSERTION PASSED! ${actual} === ${expected} ✅✅✅`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 ASSERTION FAILED! ${actual} !== ${expected}🛑🛑🛑`);
  }
};
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



const flatten = function(testArray) {
  let result = [];
  for(elements of testArray) {
  if(!Array.isArray(elements)) {
    result.push(elements)
  }else {
    for (let elem of elements) {
      if (!Array.isArray(elem)) {
        result.push(elem);
      }
    }
  } 
  }
  return result;
};

eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]