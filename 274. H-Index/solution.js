/**
 * @param {number[]} citations
 * @return {number}
 */

//Time: O(nlogn)
//Space: O(1)

var hIndex = function(citations) {
    let hIndex = 0;
    citations.sort((a, b) => (b - a));

    console.log(citations)

    for(let i = 0; i < citations.length; i++){
        if(citations[i] >= (i + 1)) hIndex++;
    }

    return hIndex;
};