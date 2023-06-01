/**
 * @param {string} digits
 * @return {string[]}
 */

 //Time: O(3^n * 4^m), n=# of digits that have 3 mappings, m=# of digits that have 4 mappings
 //Space: O(3^n * 4^m), n=# of digits that have 3 mappings, m=# of digits that have 4 mappings

var letterCombinations = function(digits) {
    let length = digits.length;
    let finalArray = [];
    let map = {"2": "abc", "3": "def", "4":"ghi", "5":"jkl", "6":"mno", "7":"pqrs", "8":"tuv", "9": "wxyz"}

    function dfs(currentLength, buildString) {
        if(buildString.length == length) finalArray.push(buildString);
        else {
            let letters = map[digits.charAt(currentLength)]; 
            for(let i = 0; i < letters.length; i++){
                dfs(currentLength + 1, buildString+letters.charAt(i));
            }
        }
    }

    if(digits == "") return [];
    dfs(0, "")
    return finalArray;
    
};

// "23"
// dfs(0, "")
//     dfs(1, "a")
//         dfs(2, "ad");
//         dfs(2, "ae");
//         dfs(2, "af")
//     dfs(1, "b")
//         dfs(2, "bd")
//         dfs(2, "be")
//         dfs(2, "bf")
//     dfs(1, "c")
//         dfs(2, "cd")
//         dfs(2, "ce")
//         dfs(2, "cf")

