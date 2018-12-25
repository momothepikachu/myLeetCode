/*

Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let newArr = nums.slice();
  if (k >= nums.length) {
    k = k % nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i + k >= nums.length) {
      nums[i + k - nums.length] = newArr[i];
    } else {
      nums[i + k] = newArr[i];
    }
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
