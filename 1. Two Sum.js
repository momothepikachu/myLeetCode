 /**
 *Given nums = [2, 7, 11, 15], target = 9,
 *Because nums[0] + nums[1] = 2 + 7 = 9,
 *return [0, 1].

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        let j = target-nums[i];
        if (nums.includes(j) && i!=nums.indexOf(j)) {
            return [i,nums.indexOf(j)]
        }   
    }
}
