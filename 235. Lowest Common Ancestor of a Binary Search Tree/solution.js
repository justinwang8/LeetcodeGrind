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

    let pArray = [];
    let qArray = [];
    let pRoot = root;
    let qRoot = root;
    
    if(p.val == root.val || q.val == root.val)
        return root;


    while(pRoot.val !== p.val){

        pArray.push(pRoot.val);

        if(p.val < pRoot.val){
            pRoot = pRoot.left;
        } else if(p.val > pRoot.val){
            pRoot = pRoot.right
        }

    }

    pArray.push(p.val);

    while(qRoot.val !== q.val){

        qArray.push(qRoot.val);

        if(q.val < qRoot.val){
            qRoot = qRoot.left;
        } else if(q.val > qRoot.val){
            qRoot = qRoot.right
        }
    }

    qArray.push(q.val);

    let lca;
    let isFound = false;
    let i = 0;

    while(!isFound){
        if(pArray[i] !== qArray[i]){
            lca = pArray[i-1];
            isFound = true;
        }
        i++;
    }


    while(lca !== root.val){
         if(lca < root.val){
            root = root.left;
        } else if(lca > root.val){
            root = root.right
        }
    }

    return root;
    
};