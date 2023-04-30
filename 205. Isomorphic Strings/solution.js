/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Time: O(n)
//Space: O(n)

var isIsomorphic = function(s, t) {
    let leftMap = new Map();
    let rightMap = new Map();

    if(s.length != t.length)
        return false;

    for(let i = 0; i < s.length; i++){
        if(!leftMap.get(s.charAt(i)) && !rightMap.get(t.charAt(i))){
            leftMap.set(s.charAt(i), t.charAt(i));
            rightMap.set(t.charAt(i), s.charAt(i));
        }

        if((leftMap.get(s.charAt(i)) != t.charAt(i)) ||  (rightMap.get(t.charAt(i)) != s.charAt(i)))
            return false;


    }

    return true;
    
    
};