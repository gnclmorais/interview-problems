var assert = require("assert");
var solution = require('../solution.js').solution;

var sample1 = [1, 0, 0, 1, 1];    // (X = 9)
var sample2 = [1, 0, 0, 1, 1, 1]; // (X = −23)

describe('Compare with given examples', function () {
  it('should return -9 in negabinary ([1,1,0,1])', function () {
    var result = solution(sample1);

    assert.deepEqual([1,1,0,1], result);
  });

  it('should return 23 in negabinary ([1,1,0,1,0,1,1])', function () {
    var result = solution(sample2);

    assert.deepEqual([1,1,0,1,0,1,1], result);
  });
});
