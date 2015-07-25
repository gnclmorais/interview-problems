var assert = require("assert");
var solution = require('../solution.js').solution;

var sample = [5, 5, 1, 7, 2, 3, 5];

describe('Arrays with index', function () {
  it('should return 4', function () {
    var index = solution(5, sample);

    assert.equal(4, index);
  });
});

describe('Arrays without index', function () {
  it('should return -1, when array is empty', function () {
    var index = solution(5, []);

    assert(index === -1);
  });

  it('should return -1, with number not present in array', function () {
    var index = solution(4, sample);

    assert(index === -1);
  });
});
