/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Time: O(n)
//Space: O(n)

var detectCycle = function(head) {
    let map = new Map();
    let currentNode = head;


    while(currentNode){
        if(map.get(currentNode) == "Exists")
            return currentNode;

        
        map.set(currentNode, "Exists");

        if(currentNode.next && currentNode.next == null){
            return null;
        }

        currentNode = currentNode.next;
    }

    return null;
    
};