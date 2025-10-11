# Remove Duplicate

> Leetcode example

## requirement

- input array with integer(including negative), non decreased sorted array
- in place => don't create new array, modify existing array
- in following num there are 5 unique element so so that num array first 5 element should unique with relative order and other element and size of array doesn't matter

### Order

- sorted increased order -> a[i+1] > a[i] => [1,2,4,5,8]
- sorted decreased order -> a[i+1] < a[i] => [9,6,5,3,2,1]
- sorted non decreased order -> a[i+1] <= a[i] => [9,6,6,3,2,2,1] => contains duplicate
- sorted non increased order -> a[i+1] >= a[i] => [1,2,2,4,4,5,8] => contains duplicate

## Code

```js
let num = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let x = 0; // will maintain index
for (let i = 0; i < num.length; i++) {
  // i for traversal
  if (num[i] > num[x]) {
    x = x + 1;
    num[x] = num[i];
  }
}
console.log(x + 1, num); // 5 [ 0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
```
