/*Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
    let count = 0;
  
    // Iterate through matrix
    for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[i].length; j++){
        // Start island traversal when start of island is seen
        if (grid[i][j] === "1"){
          visitIsland(i, j, grid);
          // After entire island has been visited, increment count
          count++;
        }
      }
    }
    return count;
  }
  
  const visitIsland = (i, j, grid) => {
    // Mark island as visited
    grid[i][j] = "0";
  
    // Check bordering positions, if island, recurse to it
    if (grid[i - 1] && grid[i - 1][j] === "1") visitIsland(i - 1, j, grid)
    if (grid[i + 1] && grid[i + 1][j] === "1") visitIsland(i + 1, j, grid)
    if (grid[i][j + 1] === "1") visitIsland(i, j + 1, grid);
    if (grid[i][j - 1] === "1") visitIsland(i, j - 1, grid);
  }
  