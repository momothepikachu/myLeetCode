/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
  let strLength = strs[0].length;
  let str = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].substr(0, strLength).includes(str)) {
      strLength--;
      str = str.substr(0, strLength);
    }
  }
  return str;
};

console.log(longestCommonPrefix(["c", "acc", "ccc"]));
