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

var deleteMiddle = function(head) {
    let traverseHead = head;
    let returnHead = head;
    let count = 0;

    if(head.next == null) return null;

    while(head.next !== null){
        count++;
        head = head.next;
    }

    count++;

    let mid = Math.floor(count / 2);

    count = 0;

    let prev = new ListNode();
    let next = traverseHead.next;

    while(count !== mid){
        prev = traverseHead;
        traverseHead = traverseHead.next;
        next = traverseHead.next;
        count++;
    }

    prev.next = next;

    return returnHead;

};