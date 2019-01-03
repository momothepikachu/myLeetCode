/**
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix, arr=[]) {
    for(let i=0; i<matrix.length; i++){
        let curRow = matrix[i]
        if(i===0){
            arr.push(...curRow)
        }else {
            let last = curRow.pop()
            arr.push(last)
            curRow.reverse()
        }
    }
    matrix.shift()
    if(matrix.length===0 || matrix[0].length===0) return arr
    matrix.reverse()
    return spiralOrder(matrix, arr)
};
console.log(spiralOrder([[7],[9],[6]]))
