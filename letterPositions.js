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





const letterPositions = function(sentence) {
  let results = {};
  console.log(results)
    const letters = sentence.split(' ').join('')
    for(let i = 0; i < letters.length; i++) {
      const current = letters[i];
      if(results[current]) {
        results[current].push(i);
      }else {
        results[current] = [i];
      }
    }
  return results;
}


assertEqual(letterPositions("hello").e, [1]);