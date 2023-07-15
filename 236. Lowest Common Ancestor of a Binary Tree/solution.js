/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//Time: O(n)
//Space: O(n)

var lowestCommonAncestor = function(root, p, q) {
    function dfs(root, value1, value2){
        if(!root) return null;

        if(root == value1 || root == value2) return root;

        let left = dfs(root.left, value1, value2);
        let right = dfs(root.right, value1, value2);

        if(left == null && right == null) return null;
        else if(left == null) return right;
        else if(right == null) return left;
        else return root;
        
    }


    return dfs(root, p, q)
};