/**
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//Recursive
var removeNthFromEnd = function(head, n) {
    let i
    function bot(head){
        if(!head){
            return [0, head]
        } else {
            [i, head.next] = bot(head.next)
            if(n==i+1){
                head=head.next
            }
            return [i+1, head]
        }
    }
    [i, head] = bot(head)
    return head
};

//Solution 2:
var removeNthFromEnd = function(head, n) {
    let A = B = head
    function bot(head){
        for(let i=0; i<n; i++){
            B=B.next
            if(!B) return head.next
        }
        while(B.next){
            B=B.next
            A=A.next
        }
        A.next=A.next.next
        return head
    }
};
