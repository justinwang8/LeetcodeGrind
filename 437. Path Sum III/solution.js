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
 * @param {number} targetSum
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var pathSum = function(root, targetSum) {
    let numPaths = 0;
    let map = {};

    function dfs(node, target, sum, map){
        if(node == null) return;

        sum += node.val;

        if(sum == target) numPaths++;
        if(map[sum - target]){
            numPaths += map[sum - target];
        }
        
        map[sum] ? map[sum] += 1 : map[sum] = 1;

        dfs(node.left, target, sum, map);
        dfs(node.right, target, sum, map);

        map[sum] -= 1;
    }

    dfs(root, targetSum, 0, map);

    return numPaths;
};