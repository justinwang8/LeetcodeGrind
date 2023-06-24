/**
 * @param {number[][]} isConnected
 * @return {number}
 */

//Time: O(n^2)
//Space: O(n)

var findCircleNum = function(isConnected) {
    let numProvinces = 0; 
    let visited = new Set(); 

    function dfs(vertex) {
        if(visited.has(vertex)) return;
        visited.add(vertex);

        let neighbours = isConnected[vertex]; 

        for(let i = 0; i < neighbours.length; i++){
            if(neighbours[i] == 1) {
                dfs(i);
            }
        }
    }

    for(let i = 0; i < isConnected.length; i++){
        if(!visited.has(i)){
            numProvinces++;
            dfs(i);
        }
    }

    return numProvinces; 
};
