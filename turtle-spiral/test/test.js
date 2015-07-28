var assert = require("assert");
var solution = require('../solution.js').solution;

var sample = [1, 3, 2, 5, 4, 4, 6, 3, 2];

describe('Path where touches the previous path', function () {
  it('should touch on the 7th move', function () {
    assert.equal(7, solution(sample));
  });
});
