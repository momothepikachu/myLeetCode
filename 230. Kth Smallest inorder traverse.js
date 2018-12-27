/**
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
 * */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stack = []
    let arr = []
    function getLeft(root){
        if(!root.left){
            return root
        } else{
            stack.push(root)
            root = root.left
            return getLeft(root)
        }
    }
    root = getLeft(root)
    while(root){
        arr.push(root.val)
        if(root.right){
            root = getLeft(root.right)    
        } else if(stack.length!=0){
            root = stack.pop()
        } else {
            return arr.sort((a,b)=>a-b)[k-1]
        }
    } 
};
