# Remove duplicates

## Input

- num array
  - integer
  - non-decreasing order

## Output condition

- keep same order for unique element
- change in place - don't create a new array

## Example

- **Input**
  - [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
- **Output**
  - [0, 1, 2, 3, 4, ....]
- ... not care about remaining element

## code

- Keep two pointer
  - i for loop to find next element(unique) _initial 0_
  - x to replace element _initial 0_
- loop
  - if i<sup>th</sup> element is greater than x<sup>th</sup> element i.e. unique
    - increase x and change x<sup>th</sup> element by i<sup>th</sup>

```js
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
function removeElement(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return nums;
}
arr = removeElement(arr);
console.log(arr);
```
