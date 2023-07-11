/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

//Time: O(n)
//Space: O(n)
//Can improve this algorithm instead of just copying the linked list into an array, look at Solution 3 in "Editorial" 

var pairSum = function(head) {
    let listLength = 0;
    let maxSum = 0;
    let temp = head;
    let valArray = [];

    while(temp !== null){
        valArray.push(temp.val);
        listLength++;
        temp = temp.next;
    }

    let leftPointer = 0;
    let rightPointer = valArray.length - 1;

    while(rightPointer - leftPointer > 0){
        if(valArray[leftPointer] + valArray[rightPointer] > maxSum) maxSum = valArray[leftPointer] + valArray[rightPointer];
        leftPointer++;
        rightPointer--;
    }

    return maxSum;
};