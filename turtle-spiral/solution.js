function solution(A) {
  var x = 0;
  var y = 0;
  var numDirections = 4;
  var places = {};
  var step;
  var direction;

  for (var i = 0, s = A.length; i < s; i += 1) {
    step = A[i];
    direction = i % numDirections;

    for (var j = 0; j < step; j += 1) {
      switch (direction) {
        case 0: y += 1; break;
        case 1: x += 1; break;
        case 2: y -= 1; break;
        case 3: x -= 1; break;
      }

      var position = x.toString() + y.toString();
      if (places[position]) {
        return i + 1; // Starting from move nr. 1
      }

      places[position] = true;
    }
  }

  return 0;
}

/** Mocha testing purposes */
if (typeof exports !== 'undefined') {
    exports.solution = solution;
}

