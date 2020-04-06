/*Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    
    let checkLen = nums.indexOf(0);
        
        if (checkLen === -1 || checkLen === nums.length -1) {
            return nums;
        };
    
    for (let i = checkLen + 1; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[checkLen++] = nums[i];
            nums[i] = 0;
        }
    }
    
    return nums;

};