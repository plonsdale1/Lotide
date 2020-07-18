const middle = require("../middle");
const assert = require("chai").assert;


describe('#middle', () => {
  it("returns [3, 4] from [1, 2, 3, 4, 5, 6],", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
}); 

