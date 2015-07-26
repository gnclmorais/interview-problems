In base −2, integers are represented by sequences of bits in the following way.
Sequence B of N bits represents the number: `sum{ B[i]*(−2)i for i = 0..N−1 }`.
The empty sequence represents 0.

Note that such a representation is suitable for both positive and negative integers.

Write a function:
```
function solution(A);
```
that, given a zero-indexed array A of M bits, containing a sequence representing
some integer X, returns the shortest sequence of bits representing −X.

The sequence should be returned as:
- a structure Results (in C), or
- a vector of integers (in C++), or
- a record Results (in Pascal), or
- an array of integers (in any other programming language).

For example, given `A = [1,0,0,1,1]` (X = 9), the function should return
`[1,1,0,1]` (−X = −9). Given `A = [1,0,0,1,1,1]` (X = −23),
the function should return `[1,1,0,1,0,1,1]` (−X = 23).

Assume that:
- M is an integer within the range [0..100,000];
- each element of array A is an integer that can have one of the following values: 0, 1.

Complexity:
- expected worst-case time complexity is O(M);
- expected worst-case space complexity is O(M), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.
