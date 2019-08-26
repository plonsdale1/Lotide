const assertEqual = function(actual, expected) {
  actual = JSON.stringify(actual, undefined, 1);
  expected = JSON.stringify(expected, undefined, 1);
  if (actual === expected) {
    console.log(`✅✅✅ ASSERTION PASSED! ${actual} === ${expected} ✅✅✅`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 ASSERTION FAILED! ${actual} !== ${expected}🛑🛑🛑`);
    console.log('actual =', actual, "expected =", expected);
  }
};


const findKeyByValue = function(object, value) {
// the function should scan the object and find a matching value that gets passed in as a second argument returning the matching key. if no key is found it should return undefined
for(let key in object) {
  if(object[key] === value) {
    return key
  }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);