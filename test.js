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
