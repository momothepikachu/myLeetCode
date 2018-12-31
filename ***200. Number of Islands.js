/**
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
 * */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let row = grid.length
    let column = grid[0].length
    let count = 0
    for(let i=0; i<row; i++){
        for(let j=0; j<column; j++){
            if(grid[i][j]=='1'){
                count++
                dfs(i,j)
            }
        }
    }
    function dfs(i,j){
        if(i<0 || i>=row || j<0 || j>=column) return
        grid[i][j]='#'
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    }
    return count
};
