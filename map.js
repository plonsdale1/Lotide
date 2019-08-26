const map = (array, cb) => {
   const results = []
  for(let item of array) {
  results.push(cb(item))
  }
  return results;
};



const words = ["na na na na", "wait", "till", "I", "get", "my", "money", "right"];


const results1 = map(words, word => word[0]);
console.log(results1);