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
 * @param {number} val
 * @return {TreeNode}
 */

//Time: O(m), m = height of tree
//Space: O(1)

var searchBST = function(root, val) {
    if(root == null)
        return [];
    
    while(root){
        if(root.val == val)
            return root;
        else if(val < root.val)
            root = root.left;
        else if(val > root.val)
            root = root.right;
    }

    return null;
};