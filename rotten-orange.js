function rottenOrange(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let q = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        q.push([i, j, 0]);
      }
    }
  }
  let maxMinutes = 0;

  while (q.length) {
    let [x, y, level] = q.shift();

    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      q.push([x - 1, y, level + 1]);
    }
    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      q.push([x + 1, y, level + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      q.push([x, y - 1, level + 1]);
    }
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      q.push([x, y + 1, level + 1]);
    }
    maxMinutes = Math.max(maxMinutes, level);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return maxMinutes;
}
console.log(
  rottenOrange([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
