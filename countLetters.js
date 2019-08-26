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




const countLetters = function(string, object) {
  const results = {};
  const spaced = string.split(' ').join('');
  for(let letter of spaced) {
    if(results[letter]) {
      results[letter] += 1;
    }else {
      results[letter] = 1;
    }
  }
  // console.log(results);
 return results;
}
console.log(assertEqual("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });