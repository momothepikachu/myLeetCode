/**
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 * */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let htable={}
    for(let i of strs){
        let set = i.split('').sort()
        htable[set]? htable[set].push(i): htable[set]=[i]
    }
    return Object.values(htable)
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
