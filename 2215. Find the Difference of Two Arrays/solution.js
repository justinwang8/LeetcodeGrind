/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

//Time: O(n)
//Space: O(n)

var findDifference = function(nums1, nums2) {
    let list = [];
    let nums1Set = {};
    let nums2Set = {};
    let nums1List = [];
    let nums2List = [];

    for(let element of nums1){
        if(!nums1Set[element])
            nums1Set[element] = 1;
    }

    for(let element of nums2){
        if(!nums2Set[element])
            nums2Set[element] = 1;
    }

    for(let key in nums1Set){
        if(nums2Set[key]){
            nums2Set[key] = 0;
        } else if(!nums2Set[key]){
            nums1List.push(parseInt(key));
        }
    }

    for(let key in nums2Set){
        if(nums2Set[key] == 1)
            nums2List.push(parseInt(key));
    }

    list.push(nums1List);
    list.push(nums2List);
    return list;
};



//Solution using Sets
/*
var findDifference = function(nums1, nums2) {
    
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)

    for (let item of nums1){
        if (nums2.has(item)) {
            nums1.delete(item)
            nums2.delete(item)
        }
    }
    return [Array.from(nums1),Array.from(nums2)]
   
};
*/