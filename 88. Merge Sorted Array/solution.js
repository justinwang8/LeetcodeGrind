/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//Time: O(m+n)
//Space: O(1)

var merge = function(nums1, m, nums2, n) {

    for(let i = 0; i < n; i++){
        nums1.pop();
    }

    let arrow = 0;

    while(arrow < nums1.length){
        if(nums2[0] <= nums1[arrow]) nums1.splice(arrow, 0, nums2.shift());
        arrow++;
    }

    if(nums2.length > 0){
        for(let element of nums2) nums1.push(element);
    }
};