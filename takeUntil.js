const takeUntil = (array, callback) => {
  console.log(callback)
    let results2 = [];
    for(element of array) {
      if(callback(element)) {
        return results2
      }else{
        results2.push(element);
      }

    }return results2;
    
};
// we pass the anonymous function as a callback into takeUntil and set its condition to compare against the current element in the for of loop. it will continue to push current elements until the condition returns false. WHOO HOO!

const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results = takeUntil(data, x => x === ',');
console.log(results);