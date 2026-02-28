# Merge Sort

- use recursive approach
- divide and merge
- divide until single element array
- merge array by left and right

## code

- return array itself if array has single element
- call recursive function again twice to get left and right using mid
- merge left and right and return it

```js
let arr = [15, 3, -20, -5, 2, 13, 0, 1, 4, 11, 6, 27, 14, 38, 79, 8];
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}
let arr1 = mergeSort(arr);
console.log(arr1);
```
