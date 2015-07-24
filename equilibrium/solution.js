function solution(A) {
    var left = 0;
    var right = arraySum(A) - A[0];

    for (var i = 0, s = A.length; i < s; i += 1) {
        if (left === right) {
            return i;
        }

        left += A[i];
        right -= A[i + 1];
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
