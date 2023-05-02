/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindrome = function(s) {
//     let map = new Map();
//     let characterArray = [];
//     let maxLength = 0;
//     let maxOddCharacter = 0;

//     for(let i = 0; i < s.length; i++){
//         if(!map.get(s.charAt(i))){
//             map.set(s.charAt(i), 1);
//             characterArray.push(s.charAt(i));
//         } else{
//             map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
//         }
//     }

//     for(let i = 0; i < characterArray.length; i++){
//         let currentCharacter = characterArray[i];
//         if(map.get(currentCharacter) % 2 == 0){
//             maxLength += map.get(currentCharacter);
//         } else {
//             if(map.get(currentCharacter) > maxOddCharacter)
//                 maxOddCharacter = map.get(currentCharacter);
//         }
//     }

//     maxLength += maxOddCharacter;

//     return maxLength;
    
// };

var longestPalindrome = function(s) {
    let result = 0;
    let characterSet = new Set();

    for(let i = 0; i < s.length; i++){
        if(characterSet.has(s.charAt(i))){
            result += 2;
            characterSet.delete(s.charAt(i));
        } else {
            characterSet.add(s.charAt(i));
        }
    }

    if(characterSet.size !== 0 )
        return result + 1;
    else
        return result;
}
