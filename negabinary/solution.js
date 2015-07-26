function solution(A) {
  var number = -1 * A.map(function (val, idx) {
      return val * Math.pow(-2, idx);
  }).reduce(function (a, b) {
      return a + b;
  });

  var conversion = [];
  do {
    conversion.push(Math.abs(number % -2));
    number = Math.ceil(number / -2);
  } while (number);

  return conversion;
}

/** Mocha testing purposes */
if (typeof exports !== 'undefined') {
    exports.solution = solution;
}
