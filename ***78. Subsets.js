/**
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Solution for Permutation:
// var subsets = function(nums) {
//     let res = []
//     function subs(nums, temp=[], n){
//         if(temp.length==n){
//             console.log('add:', temp, 'n:',n)
//             res.push(temp.slice())
//         } else {
//             for(let j of nums){
//                 if(!temp.includes(j)){
//                     temp.push(j)
//                     console.log('n:', n, 'j:', j, 'temp:', temp)
//                     subs(nums, temp, n)
//                     temp.pop()
//                 }
//             }
//         }        
//     }
//     for(let i=0; i<=nums.length; i++){
//         subs(nums, [], i)
//     }    
//     return res
// };

var subsets = function(s) {
    if (s.length == 0) {
        return [[]]
    } else {
        let rest = subsets(s.slice(1))  
        let newSets = rest.map(         
            (set) => [s[0], ...set]
        )
        return [...rest, ...newSets]    
    }
};

console.log(subsets([1,2,3]))
