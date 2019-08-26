const eqArrays = require("./eqArrays");


//this should work because index starts at 0 and floor would make up for it being split in half and all.
const middle = function(array) {
    let results = [];
    if(array.length === 1) {
      return [];
    }
    let mid = Math.floor(array.length / 2);
    if(array.length %2 === 0) {
        results.push(array[mid -1]);
        results.push(array[mid]);
    }else {
      results.push(array[mid]);
    }    
   return results;
}
eqArrays(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
module.exports = middle;