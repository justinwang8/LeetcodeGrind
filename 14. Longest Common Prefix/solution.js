/**
 * @param {string[]} strs
 * @return {string}
 */

//Time: O(n^2)
//Space: O(1)

var longestCommonPrefix = function(strs) {
    let maxStringLength = 0;
    let prefix = "";
    let longestPrefix = "";
    
    for(let i = 0; i < strs.length; i++){
        if(strs[i].length > maxStringLength)
            maxStringLength = strs[i].length;
    }
    
    for(let i = 0; i < maxStringLength; i++){ // 6
        let referenceCharacter = strs[0].charAt(i);
        for(let j = 1; j < strs.length; j++){
            if(strs[j].charAt(i) !== referenceCharacter){
                return longestPrefix;   
            }
        }
        
        longestPrefix = longestPrefix.concat(strs[0].charAt(i));
    }
    
    return longestPrefix;
};

//Time: O(nlogn)
//Space: O(1)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // sort the array because its rearrange alphabetical order
   strs.sort();


  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]){
        return strs[0].substr(0, i);
    } 
  }

  return strs[0];  
};