/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//Time: O(m*n), m = length of text 1, n = length of text 2
//Space: O(m*n), m = length of text 1, n = length of text 2

var longestCommonSubsequence = function(text1, text2) {
    let twoDArray = [];
    text1 = text1.split("");
    text2 = text2.split("");

    for(let i = 0; i <= text1.length; i++){
        let currRow = [];
        for(let j = 0; j <= text2.length; j++){
            if(i == 0 || j == 0) currRow.push(0);
        }

        twoDArray.push(currRow);
    }

    for(let i = 0; i <= text1.length; i++){
        for(let j = 0; j <= text2.length; j++){
            if(i !== 0 && j !== 0){
                if(text1[i - 1] == text2[j - 1]){
                    twoDArray[i][j] = twoDArray[i - 1][j - 1] + 1;
                } else {
                    twoDArray[i][j] = Math.max(twoDArray[i - 1][j], twoDArray[i][j - 1]);
                }
            }
        }
    }

    return twoDArray[twoDArray.length - 1][twoDArray[0].length - 1];
    
};