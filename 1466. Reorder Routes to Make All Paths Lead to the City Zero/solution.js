/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var minReorder = function(n, connections) {
    let total = 0;

    function dfs(node, parent, list){
        for(let [next, value] of list[node]){
            if(next == parent){}
            else {
                total += value;
                dfs(next, node, list);
            }
        }
    }

    let adjacencyList = {};

    for(let element of connections){

        if(!adjacencyList[element[0]]){
            adjacencyList[element[0]] = [[element[1], 1]];
        } else {
            adjacencyList[element[0]].push([element[1], 1]);
        }

        if(!adjacencyList[element[1]]){
            adjacencyList[element[1]] = [[element[0], 0]];

        } else {
             adjacencyList[element[1]].push([element[0], 0]);
        }
    }

    dfs(0, -1, adjacencyList);

    return total;
};