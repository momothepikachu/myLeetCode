/**
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note: 
You may assume k is always valid, 1 ≤ k ≤ n2.
 * */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix.length
    let start = matrix[0].slice()
    for(let i=1; i<n; i++){
        start = start.concat(matrix[i].slice())
    }
    return start.sort((a,b)=>a-b)[k-1]
};

// Solution2:
// var kthSmallest = function(matrix, k) {
//     return matrix.reduce((arr, row) => arr.concat(row), []).sort((a,b) => a-b)[k - 1];
// };
