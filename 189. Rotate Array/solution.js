/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Time: O(n)
//Space: O(1)

var rotate = function(nums, k) {
    let left = 0;
    let right = nums.length - 1;
    let cutoff = k % nums.length;

    reverseArray(nums, left, right);

    reverseArray(nums, 0, cutoff - 1);

    reverseArray(nums, cutoff, nums.length - 1)
    
};

function reverseArray(a, l, r) {
    while(r > l){
        let temp = a[l];
        a[l] = a[r];
        a[r] = temp;
        l++;
        r--;
    }
}