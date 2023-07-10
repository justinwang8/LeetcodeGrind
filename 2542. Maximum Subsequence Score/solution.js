/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

//Time: O(nlogn)
//Space: O(n)

var maxScore = function(nums1, nums2, k) {
    let array = [];
    let heap = new MinPriorityQueue({priority: (element) => element})
    let sum = 0;
    let max = 0;

    for(let i = 0; i < nums1.length; i++){
        array.push([nums1[i], nums2[i]]);
    }

    array.sort((a, b) => b[1] - a[1]);

    for(let i = 0; i < k; i++){
        heap.enqueue(array[i][0])
        sum += array[i][0];
    }

    max = sum * array[k - 1][1];

    let pointer = k;

    while(pointer < array.length){
        let remove = heap.dequeue().element;
        sum -= remove;
        heap.enqueue(array[pointer][0]);
        sum += array[pointer][0];
        if(sum * array[pointer][1] > max) max = sum * array[pointer][1];
        pointer++;
    }

    return max;
};