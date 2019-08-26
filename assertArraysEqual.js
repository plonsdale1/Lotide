const assertArraysEqual = function(arr1, arr2) {
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
module.exports = assertArraysEqual;

