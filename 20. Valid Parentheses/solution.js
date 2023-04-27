/**
 * @param {string} s
 * @return {boolean}
 */

//Time: O(n)
//Space: O(n)

var isValid = function(s) {
    let stack = [];
      
      for(let i = 0; i < s.length; i++){
          if(s.charAt(i) == '(')
              stack.push(')')
          else if(s.charAt(i) == '{')
              stack.push('}')
          else if (s.charAt(i) == '[')
              stack.push(']')
          else if (s.charAt(i) !== stack.pop())
              return false;
      }
      
      
      return stack.length === 0;
  
      
  };