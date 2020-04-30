/*Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42*/

var maxPathSum = function(root) {
    // maxSum[i] is the maximum path which goes through node i
    let maxSum = [];
    getMax(root, maxSum);
    return Math.max(...maxSum);
};

var getMax = function (root, maxSum) {
    let left = 0;
    let right = 0;
    if (root.left) {
        // recursive to the left
        left = getMax(root.left, maxSum);
    }
    if (root.right) {
        // recursive to the right
        right = getMax(root.right, maxSum);
    }
    // there are 4 posible paths which go through root
    // 1. root itself
    // 2. root + left branch
    // 3. root + right branch
    // 4. root + left + right
    maxSum.push(Math.max(root.val + left, root.val + right, root.val + left + right, root.val));
    // However, to merge with the parent, there is only 3 posible paths
    return Math.max(root.val + left, root.val + right, root.val);
}