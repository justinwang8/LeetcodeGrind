/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

//Time: O(log n)
//Space: O(1)

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let middleIndex = Math.ceil(n / 2);
        let lowerIndex = 1;
        let upperIndex = n;

        if(isBadVersion(1))
            return 1;

        if(n == 2){
            if(isBadVersion(2))
                return 2;
        } 

        while((upperIndex - lowerIndex) > 1){
            if(isBadVersion(middleIndex)){
                upperIndex = middleIndex;
            }

            if(!isBadVersion(middleIndex)){
                lowerIndex = middleIndex;
            }

            if((upperIndex - lowerIndex) == 1){
                if(isBadVersion(upperIndex) && !isBadVersion(lowerIndex)){
                    return upperIndex;
                }
            }

            middleIndex = Math.floor((lowerIndex + upperIndex) / 2);

        }
        
    };
};