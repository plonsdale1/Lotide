const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ASSERTION PASSED! ${actual} === ${expected} ✅✅✅`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 ASSERTION FAILED! ${actual} !== ${expected}🛑🛑🛑`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = function(allItems, itemsToCount) {
let results = {}
for(item of allItems) {
  if(results[item]) {
    results[item] += 1
  }else {
    results[item] = 1
  }
  console.log(item)
}
return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);