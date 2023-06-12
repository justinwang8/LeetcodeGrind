/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Time: O(n)
//Space: O(1)

var oddEvenList = function(head) {

    if(!head) return null;

    let odd = head;
    let even = head.next;
    let originalHead = head;
    let originalEven = head.next;

    while(even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = originalEven;

    return originalHead;

};