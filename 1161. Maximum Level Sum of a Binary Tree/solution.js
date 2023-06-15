/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//Time: O(n), n = # of nodes in the tree
//Space: O(2^h), h = height of tree

var maxLevelSum = function(root) {
    let currentLevel = [root];
    let sumArray = [];
    let max = -Infinity;
    let maxIndex = 0;

    while(currentLevel.length > 0){
        let currentSum = 0;
        let levelLength = currentLevel.length;

        for(let i = 0; i < levelLength; i++){
            let currentNode = currentLevel.shift();
            if(currentNode){
                currentSum += currentNode.val;
                currentLevel.push(currentNode.left);
                currentLevel.push(currentNode.right);
            }
        }

        sumArray.push(currentSum);
    }

    sumArray.pop();

    for(let i = 0; i < sumArray.length; i++){
        if(sumArray[i] > max){
            max = sumArray[i];
            maxIndex = (i + 1);
        }
    }

    return maxIndex;
};