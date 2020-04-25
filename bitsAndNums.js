/*Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0*/

function rangeBitwiseAnd(m, n) {
    // number of shifts we had to make
    let i = 0;
	
    // go until m and n are equal
    while (m !== n) {
        // right shift both m and n
        m >>= 1;
        n >>= 1;
        // that's 1 more shift
        i++;
    }
	
    // pad 0's on right of m by right shifting by i
    return (m <<= i);
}