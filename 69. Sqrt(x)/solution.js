/**
 * @param {number} x
 * @return {number}
 */

//Time: O(log n)
//Space: O(1)

var mySqrt = function(x) { 
    let start = 0; 
    let end = x;
    let mid = Math.floor(x / 2);
    let found = false;

    if(x <= 1)
        return x;

    while(1){
        if((mid * mid) <= x && ((mid + 1) * (mid + 1) > x) )
            return mid;
        else if((mid * mid) > x)
            end = mid;
        else
            start = mid;
        
        mid = Math.floor( (start + end) / 2);
    }

};