/**
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 * */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let accMul = 1
    let newArr = []
    for(let i=0; i<nums.length; i++){
        newArr[i] = accMul
        accMul *= nums[i]
    }
    accMul = 1
    for(let j=nums.length-1; j>=0; j--){
        newArr[j] = newArr[j] * accMul
        accMul *= nums[j]
    }
    return newArr
};
