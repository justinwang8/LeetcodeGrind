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
 * @return {number[][]}
 */

//Time: O(n), n=# of nodes in the tree
//Space: O(n), n=maximum # of nodes in a given level

var levelOrder = function(root) {
    //Final Output Array
    let resultArray = [];

    //Keep track of nodes at each level
    let currentLevelNodes = [];

    //Initially push the root to currentLevelNodes, if it exists
    if(root){
        currentLevelNodes.push(root);
    }
    
    //This loop runs each time we get to a new level, currentLevelNodes should have all the nodes of the next level when this re runs
    while(currentLevelNodes.length > 0){
        //Current level values to be inserted into resultArray
        let currentLevelArray = [];
        //How many nodes are in the current level?
        let length = currentLevelNodes.length;

        //Iterate through each node on the level, pop it from currentLevelNodes, insert the value into currentLevelArray, and push their children itno currentLevelNodes
        for(let i = 0; i < length; i++){
            let currentNode = currentLevelNodes.shift();
            currentLevelArray.push(currentNode.val);

            if(currentNode.left){
                currentLevelNodes.push(currentNode.left);
            }
                
            
            if(currentNode.right){
                currentLevelNodes.push(currentNode.right);
            }

        }

        //Push the currentLevelArray into resultArray
        resultArray.push(currentLevelArray)
    }

    return resultArray;

};