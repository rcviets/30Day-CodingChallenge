/*Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].*/

let subarraySum = function(nums, k) {
    let cnt = 0;
    let map = new Map();
    map.set(0, 1); // we use map to store prefixSum values: special case sum=0 in begin
    
    let sum = 0;
    for( let i = 0; i < nums.length; i++ ){
        sum += nums[i];
        let target = sum - k;
        if(map.has(target)) cnt += map.get(target);
        if(!map.has(sum)) map.set(sum, 0);
        map.set(sum, map.get(sum)+1);
    }
    return cnt;
};