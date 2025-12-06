# Remove Element

## Input

- **integer array** `[1, 1, 2, 3, 5, 4, 3, 4]`
- **value** 3

## Sample Output

- [1, 1, 2, 5, 4, 4, ....]
- Count = 6
- remove value and in place array

## Code

- keep two counter
  - i for loop, initialize 0
  - x to place, initialize 0
- if i<sup>th</sup> element is equal to value
  - replace x<sup>th</sup> with i<sup>th</sup>
  - increase x
- return x

```js
let arr = [1, 1, 2, 3, 5, 4, 3, 4];
let value = 3;
function removeElement(nums, value) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != value) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  console.log(nums);
  return x;
}
count = removeElement(arr, value);
console.log(count);
```
