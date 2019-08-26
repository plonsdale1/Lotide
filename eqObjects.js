const assertEqual = function(actual, expected) {
  // actual = JSON.stringify(actual, undefined, 1);
  // expected = JSON.stringify(expected, undefined, 1);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  for(key in object1) {
    if(Array.isArray(object1[key] ) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key])
    }else if (object1[key] !== object2[key]) {
      return false
    }
  }return true;  
};

const pl = {one: "1", two: "2", three: "3"};
const pdl = {one: "1", two: "2", three: "3"};
const wry = {1: "one", 2: "two", 3: "three"};
assertEqual(eqObjects(pl, pdl), true)
assertEqual(eqObjects(wry, pl), false)


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false