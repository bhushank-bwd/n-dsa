let prices = [1, 3, 4, 23, 11, 21];

let min = prices[0];
let profit = 0;

for (let i = 1; i < prices.length; i++) {
  if (prices[i] - min > profit) {
    profit = prices[i] - min;
  }
  if (prices[i] < min) {
    min = prices[i];
  }
}
console.log(profit);
// don't use bruteForce attack it has O(n**2) time complexity
