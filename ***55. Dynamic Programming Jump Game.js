/**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
 * */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// DFS/Backtracking solution reachs time limit
// var canJump = function(nums) {
//     let htable = {}
//     function jump(path){
//         if(htable[path]) return false
//         if(path===nums.length-1){
//             return true
//         } else if(path>nums.length-1){
//             return false
//         }else{
//             let current = nums[path]
//             for(let i=current; i>=1; i--){
//                 path+=i
//                 if(!jump(path)){
//                     htable[path]=false
//                     path-=i
//                 }else return true    
//             }
//             return false
//         }
//     }
//     return jump(0)
// };

var canJump = function(nums) {
    let max = nums[0]
    for(let i=1; i<nums.length; i++){
        if(max<i) return false
        max = Math.max(i+nums[i], max)
    }
    return true
};
console.log(canJump([2,3,1,1,4]))
