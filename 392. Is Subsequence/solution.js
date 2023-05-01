/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Time:O(m+n), m = smaller length string, n = larger length string
//Space: O(m), m = smaller length string

var isSubsequence = function(s, t) {
    let queue = [];

    for(let i = 0; i < s.length; i++){
        queue.push(s.charAt(i));
    }

    console.log(queue);

    for(let i = 0; i < t.length; i++){
        if(queue[0] == t.charAt(i))
            queue.shift();
    }

    if(queue.length == 0)
        return true;
    
    return false;
    
};