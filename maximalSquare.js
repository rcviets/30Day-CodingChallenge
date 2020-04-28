/*Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4*/

var maximalSquare = function(matrix) {
    if(matrix.length === 0) return 0;
    
    const dp = [];
    let maxLen = 0;
    
    // initialize dp table
    for(let i = 0; i <= matrix.length; i++) {
        dp.push([])
    }
    
    // fill first row of dp table with 0
    for(let j = 0; j <= matrix[0].length; j++) {
        dp[0][j] = 0;
    }
    
    // fill first col of dp table with 0
    for(let i = 0; i <= matrix.length; i++) {
        dp[i][0] = 0;
    }
    
    // fill the rest of the dp table
    for(let i = 1; i <= matrix.length; i++) {
        for(let j = 1; j <= matrix[0].length; j++) {
            
            if(matrix[i-1][j-1] === '0') {
                dp[i][j] = 0;
            } else {
                const top = dp[i-1][j];
                const left = dp[i][j-1];
                const diag = dp[i-1][j-1];
                const val = Math.min(top, left, diag) + 1;
                dp[i][j] = val
                if(val > maxLen) maxLen = val;
            }
        }
    }
    return maxLen**2;
};