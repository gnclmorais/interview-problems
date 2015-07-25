function solution(X, A) {
    var same = [];
    var diff = [];
    var i, s;

    for (i = 0, s = A.length; i < s; i += 1) {
        same[i] = +(X == A[i]);
        diff[i] = +(X != A[i]);
    }

    var numSame = 0;
    var numDiff = arraySum(diff);
    for (i = 0, s = A.length; i < s; i += 1) {
        if (numSame === numDiff) {
            return i;
        }

        numSame += same[i];
        numDiff -= diff[i];
    }

    return -1;
}

/**
 * Simply sums an array.
 * @param  {Array} arr An array of integers.
 * @return {number}    Sum of the array.
 */
function arraySum(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    }, 0);
}

if (typeof exports !== 'undefined') {
    exports.solution = solution;
}
