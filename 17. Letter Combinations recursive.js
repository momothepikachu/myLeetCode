/**
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
 * */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Permutation Solution:
// var letterCombinations = function(digits) {
//     let htable = {'2':'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', 7:'pqrs', '8':'tuv','9':'wxyz'}
//     let res = []

//     function mappin(digits, temp={letters:'', idx:[]}){
//         if(temp.letters.length==digits.length){
//             res.push(temp.letters)
//             console.log('push letters', temp.letters, 'current res:', res)
//         } else {
//             for(let i=0; i<digits.length; i++){
//                 if(!temp.idx.includes(i)) {
//                     temp.idx.push(i)
//                     for(let j of htable[digits[i]]){
//                         temp.letters+=j
//                         console.log('i', i, 'j:',j, 'letters:', temp.letters)
//                         mappin(digits, temp)
//                         temp.letters = temp.letters.substr(0, temp.letters.length-1)
//                         console.log('after pop:', temp.letters)
//                     }
//                     temp.idx.pop()                    
//                 }
//             }
//         }
//     }
//     mappin(digits)
//     return res
// };

var letterCombinations = function(digits) {
    let htable = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
      }    
    if (!digits || digits.length === 0) return [];
    if(digits.length==1){
        return htable[digits] 
    } else {
        let rest = letterCombinations(digits.slice(1)) 
        let currentLetters = htable[digits[0]]
        return rest.reduce((arr, letters)=>
            arr.concat(currentLetters.map(c=>c+letters)), []
            )
    }
};
