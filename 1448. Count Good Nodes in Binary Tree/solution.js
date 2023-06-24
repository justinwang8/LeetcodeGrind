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
//Space: O(h), h = max height of tree

var goodNodes = function(root) {
    
    let numGood = 0;

    function dfs(root, max){
        if(!root) return;

        if(root.val >= max){
            numGood++;
            max = root.val;
        }

        dfs(root.left, max);
        dfs(root.right, max);
    }

    dfs(root, root.val);

    return numGood;
    
};