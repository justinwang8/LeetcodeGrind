/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Time: O(n)
//Space: O(n)

var backspaceCompare = function(s, t) {
    let sStack = [];
    let tStack = [];

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == '#')
            sStack.pop();
        else
            sStack.push(s.charAt(i));
    }

    for(let i = 0; i < t.length; i++){
        if(t.charAt(i) == '#')
            tStack.pop();
        else
            tStack.push(t.charAt(i));
    }

    if(sStack.length !== tStack.length)
        return false;

    for(let i = 0; i < sStack.length; i++){
        if(sStack[i] !== tStack[i])
            return false;
    }

    return true;
    
};