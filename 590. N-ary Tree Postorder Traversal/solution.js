/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

//BFS
//Time: O(n)
//Space: O(n)

var postorder = function(root) {
    if(root == null) return [];
    let stack = [root];
    let finalArray = [];

    while(stack.length > 0){
        let node = stack.pop();

        for(let child of node.children)
            stack.push(child);
    
        finalArray.push(node.val);
    }

    return finalArray.reverse();

};

//DFS
//Time: O(n)
//Space: O(n)

var postorder = function(root) {
     let ans = [];
     function dfs(node){
        if(!node) return;
        for(let child of node.children)
            dfs(child);
        ans.push(node.val)
     }
     dfs(root);
     return ans;
};
