/**
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 * */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let columns = board[0].length
    function dfs(i,j,path){
        if(i<0 || i>=rows || j<0 || j>=columns || board[i][j]!==word[path]) return false
        path++
        board[i][j]='#'
        if(path===word.length) return true
        if(dfs(i-1, j, path)) return true
        if(dfs(i+1, j, path)) return true
        if(dfs(i, j-1, path)) return true
        if(dfs(i, j+1, path)) return true
        board[i][j]=word[--path]
        return false
    }
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            if(dfs(i,j,0)) return true
        }
    }
    return false
};
console.log(exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ], "SEE"))

