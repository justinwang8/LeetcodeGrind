/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

//Time: O(n)
//Space: O(1)

var canPlaceFlowers = function(flowerbed, n) {

    if(flowerbed.length == 1){
        if(flowerbed[0] == 0) n--;
    }

    for(let i = 0; i < flowerbed.length; i++){
        if(i == 0 || i == (flowerbed.length - 1)){
            if(flowerbed[i] == 0 && (flowerbed[i - 1] == 0 || flowerbed[i + 1] == 0)) {
                flowerbed[i] = 1;
                n--;
            }
        }
        
        if(flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0){
            flowerbed[i] = 1;
            n--;
        }
    }

    if(n > 0) return false;

    return true;
    
};