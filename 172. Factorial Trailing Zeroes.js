/**
Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
*/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // let factorial = 1
    // for(let i=1; i<=n; i++){
    //     factorial *= i
    // }
    let count = 0
    while (Math.floor(n/5)>0){
        count += Math.floor(n/5)
        n = Math.floor(n/5)
    }
    return count

};

console.log(countAndSay(4))
