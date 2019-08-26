



const assertObjectsEqual = function(object1, object2) {
  if(object1.length !== object2.length) {
    console.log("NOT EQUAL")
    return false;
  }
  for(let i = 0; i < object1.length; i++) {
    if (object1[i] !== object2[i]) {
      console.log("NOT EQUAL")
      return false;
    }
  }
  console.log("EQUAL THIS TIME")
  return true;
}

const ab = { a: '1', b: 2 };
const ac = { a: '1', b: 2 };
assertObjectsEqual(ab, ac), true;