const tail = require("../tail");
// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;


describe("#tail", () => {
  it("returns Labs for ['Yo Yo', 'Lighthouse', 'Labs'] "), () => {
    assert.DeepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs'],) ['Labs'])
  }
})




// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!