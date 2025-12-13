# Max profit

## brute force

- try to store different all combination profit
- but it will give o(N<sup>2</sup>) Time Complexity

## input

- array of share price for different days
- [7, 1, 5, 3, 6, 4]

## Output

- In above example 5
- if not any profit return zero

## Code

- keep min (first element)
- profit (0)
- loop through array
  - if current element - min is greater than profit change profit
  - if current element is less than min then change min
- return profit

```js
function maxProfit(num) {
  let min = num[0];
  let profit = 0;
  for (let i = 1; i < num.length; i++) {
    if (num[i] - min > profit) {
      profit = num[i] - min;
    }
    if (num[i] < min) min = num[i];
  }
  return profit;
}
```
