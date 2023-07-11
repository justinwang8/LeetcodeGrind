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

//Time: O(n)
//Space: O(n)

var longestZigZag = function(root) {

    let max = 0;

    function dfs(node, direction, sum){
        if(node == null) return;

        if(sum > max) max = sum;

        if(direction == "right" && node.left){
            let newSum = sum + 1;
            dfs(node.left, "left", newSum);
        } 
        if(direction == "left" && node.right){
            let newSum = sum + 1;
            dfs(node.right, "right", newSum);
        } 
        if(direction == "right" && node.right){
            dfs(node.right, "right", 1);
        }
        if(direction == "left" && node.left){
            dfs(node.left, "left", 1);
        }
    }


    dfs(root.left, "left", 1);
    dfs(root.right, "right", 1);

    return max;

};