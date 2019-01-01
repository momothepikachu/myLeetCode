/**
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
 * */

/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(s){
    let rev = s.split('').reverse().join('')
    return s==rev
}
function part(s){
    let res = []
    if(s.length==0) return [[]]
    for(let i=1; i<=s.length; i++){
        let currentL = s.slice(0, i)
        if(isPalindrome(currentL)){           
            let rest = part(s.slice(i))
            rest = rest.map(i=>{
                return [currentL].concat(i)})
            res = res.concat(rest)
        }                 
    }
    return res
}
var partition = function(string) {

    return part(string)
};

console.log(partition('aab'))
