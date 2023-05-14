/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//Time: O(n)
//Space: O(n)

var addBinary = function(a, b) {
    let aArray = a.split("");
    let bArray = b.split("");
    let smallerArray = (aArray.length < bArray.length) ? aArray : bArray;
    let biggerArray = (aArray.length < bArray.length) ? bArray : aArray;
    let finalArray = [];

    while(smallerArray.length !== biggerArray.length)
        smallerArray.splice(0, 0, "0");
    
    for(let i = (smallerArray.length - 1); i >= 0; i--){
        let columnAddition = parseInt(smallerArray[i]) + parseInt(biggerArray[i]);

        if(columnAddition >= 2){
            columnAddition == 2 ? finalArray.splice(0, 0, "0") : finalArray.splice(0, 0, "1");
            smallerArray[i - 1] = parseInt(smallerArray[i - 1]) + 1;
            if(i == 0)
                finalArray.splice(0, 0, "1");
        } 
        else if(parseInt(smallerArray[i]) + parseInt(biggerArray[i]) == 1)
            finalArray.splice(0, 0, "1");
        else
            finalArray.splice(0, 0, "0");
    }

    return finalArray.join("");
    
};
