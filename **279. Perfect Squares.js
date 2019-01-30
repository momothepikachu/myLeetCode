/**
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquares = function(n) {
    let htable = {0:0, 1:1}
    function sqr(m){
        if(!htable[m]){
            if(Number.isInteger(Math.sqrt(m))) {
                htable[m]=1
            } else {
                let sqrts = []
                for(let i=1; i*i<m; i++){
                    sqrts.push(i)
                }
                htable[m]=Infinity
                for(let i of sqrts.reverse()){
                    let total = 1+sqr(m-i*i)
                    if(total<htable[m]) htable[m]=total
                }
            }
        } 
        return htable[m]
    }
    return sqr(n)
};

//Dynamic Programming
function perfectSqr(n) {
  let memory = [0];
  let min;
  for (let i = 1; i <= n; i++) {
    min = memory[i - 1] + 1;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, memory[i - j * j] + 1);
    }
    memory[i] = min;
  }
  return min;
}
