/**
 * @param {string} senate
 * @return {string}
 */

//Time: O(n)
//Space: O(n)

var predictPartyVictory = function(senate) {
    let rQueue = [];
    let dQueue = [];

    for(let i = 0; i < senate.length; i++){
        if(senate[i] == 'R') rQueue.push(i);
        else dQueue.push(i);
    }

    while(rQueue.length > 0 && dQueue.length > 0){
        let r = rQueue.shift();
        let d = dQueue.shift();

        if(r < d) rQueue.push(r + senate.length);
        else dQueue.push(d + senate.length);
    }

    if(rQueue.length > 0) return "Radiant";
    
    return "Dire"; 
};