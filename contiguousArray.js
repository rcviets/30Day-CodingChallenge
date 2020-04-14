/*Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) 
{
        var len = nums.length, ones, zeroes, excess;
        if(len < 2)
                return 0;
        ones = nums.reduce((acc,value)=>acc+value,0);
        zeroes = len-ones;
        if(ones == zeroes)
                return len;
        
        const goodNum = ones > zeroes ? 0:1;
        const badNum = 1-goodNum;
        
        const getCosts = function(excess,dir) 
        {
                var start, end, costs=[0], lastExcess=excess, currExcess = excess;
                if(dir == 1)
                {
                        start = 0;
                        end = len;
                }
                else
                {
                        start = len-1;
                        end = -1;
                }
                
                for(let i = start; i != end; i += dir)
                {
                        if(nums[i] == badNum)
                        {
                                currExcess--;
                                if(currExcess < lastExcess)
                                {
                                        costs.push(1+Math.abs(i-start));
                                        if(currExcess == 0)
                                                break;
                                        lastExcess = currExcess;
                                }
                        }
                        else
                                currExcess++;
                }
                return costs;
        };
        
        /* Balance the number of ones and zeroes at the lowest cost of goodNums. */
        var maxCost = len, excess = Math.abs(ones-zeroes);
        var leftCost = getCosts(excess,1);
        var rightCost = getCosts(excess,-1);

        /* Find the cheapest LR balance. */
        var cheapest = len;
        for(let i=0; i<leftCost.length; i++)
        {
                cheapest = Math.min(leftCost[i]+rightCost[rightCost.length-(i+1)],cheapest);
        }
        
        return len-cheapest;
};