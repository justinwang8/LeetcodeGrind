/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

//Time: O(n)
//Space: O(2^h), h = max height of the tree

var leafSimilar = function(root1, root2) {
    let global1 = [];
    let global2 = [];

    function dfs(root, resultArray) {
        if(!root) return;

        if(root.left == null && root.right == null) {
            resultArray.push(root.val);
            return;
        }

        dfs(root.left, resultArray);
        dfs(root.right, resultArray);
    }

    dfs(root1, global1);
    dfs(root2, global2);

    return global1.join(",") == global2.join(",");
};