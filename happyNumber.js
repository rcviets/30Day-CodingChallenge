/*Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, 
replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1
(where it will stay), or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, counter = 0) {
    result = false

    if (counter < 8) {
        let realDigits = n.toString().split('').map(n => n * n);
        let sum = realDigits.reduce((a, b) => a + b, 0);

        if (sum === 1) {
            return result = true;
        } else {
            counter++;
            isHappy(sum, counter);
        }

        return result;
    }
};