/**
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
 * */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// O(m+n) Solution
var setZeroes = function(matrix) {
    let rows = new Set();
    let columns = new Set();
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j]==0){
                rows.add(i)
                columns.add(j)
            }
        }
    }
    for(let row of rows){
        for(let j=0; j<matrix[0].length; j++){
            matrix[row][j]=0
        }
    }
    for(let column of columns){
        for(let j=0; j<matrix.length; j++){
            matrix[j][column]=0
        }
    }    
    return matrix
};

//O(1)
var setZeroes = function(matrix) {
    let m = [...Array(matrix.length).keys()];
    let n = [...Array(matrix[0].length).keys()];

    for(let i of m){
        for(let j of n){
            if(matrix[i][j]==0){
                for(let k of m){
                    if(matrix[k][j]!=0) matrix[k][j]='f'
                }
                for(let l of n){
                    if(matrix[i][l]!=0) matrix[i][l]='f'
                }
            }
        }
    }
    console.log('before:', matrix)
    for(let i of m){
        for(let j of n){
            if(matrix[i][j]=='f') matrix[i][j]=0
        }
    }
    return matrix
};
console.log(setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]))
