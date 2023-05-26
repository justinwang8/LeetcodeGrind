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
 * @return {number[]}
 */

//Time: O(n)
//Space: O(m), m = max # of nodes at a given level

var rightSideView = function(root) {
    if(root == null) return [];

   let currentLevel = [root];
   let nextLevel = [];
   let outputArray = [];

    if(root.left)
        nextLevel.push(root.left);

    if(root.right)
        nextLevel.push(root.right);

   while(nextLevel.length > 0){
       outputArray.push(currentLevel[currentLevel.length - 1].val);
       currentLevel = nextLevel;
       nextLevel = [];
       for(let element of currentLevel){
           if(element && element.left != null)
                nextLevel.push(element.left);
            if(element && element.right != null)
                nextLevel.push(element.right);
       }
   }

   let lastNode;

   if(currentLevel[currentLevel.length - 1] && currentLevel[currentLevel.length - 1].val != null)
        lastNode = currentLevel[currentLevel.length - 1].val;
    
    outputArray.push(lastNode);

   return outputArray;
};