var assert = require("assert");
var solution = require('../solution.js').solution;

var sample = [-1, 3, -4, 5, 1, -6, 2, 1];

describe('Arrays with equilibrium index', function () {
  it('should return 1, 3 or 7', function () {
    var index = solution(sample);

    assert(index === 1 || index === 3 || index === 7);
  });
});

describe('Arrays without equilibrium index', function () {
  it('should return -1', function () {
    var index = solution([]);

    assert(index === -1);
  });
});
