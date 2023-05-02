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

var middleNode = function(head) {
    let size = 1;
    let start = head;

    while(head.next){
        head = head.next;
        size++;
    }

    for(let i = 0; i < Math.floor(size / 2); i++){
        start = start.next;
    }

    return start;
    
};