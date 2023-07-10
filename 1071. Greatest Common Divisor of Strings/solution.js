/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

//Time: O(log n)
//Space: O(1)
//retarded ass question bruv

var gcdOfStrings = function(str1, str2) {
    var gcd = function(a, b) {
        if (!b) {
          return a;
        }

        return gcd(b, a % b);
    }       

    if(str1 + str2 !== str2 + str1) return "";

    let gcdLength = gcd(str1.length, str2.length);

    return str1.substr(0, gcdLength);
};