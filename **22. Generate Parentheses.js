/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 * */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    let temp = {'total':0, 'set':'', '(':0, ')':0, 'sum':0}
    let val = {'(':1, ')':-1}
    function par(n, temp){
        if(temp.total===2*n && temp.sum==0){
            res.push(temp.set)
            console.log('make set', temp.set)
        } else {
            for(let i of '()'){
                if(temp.sum+val[i]<0) continue
                if(temp[i]<n){
                    temp[i]++
                    temp.total++
                    temp.set+=i
                    temp.sum+=val[i]
                    console.log('start',i, temp[i], 'total', temp.total, 'set', temp.set)
                    par(n, temp)
                    temp.set = temp.set.substr(0, temp.set.length-1) 
                    temp.total--
                    temp[i]--
                    temp.sum-=val[i]
                    console.log('pop', i, temp.set)
                }
            }
        }
    }
    par(n, temp)
    return res
};

console.log(generateParenthesis(4))

