let arr = [1, 7, 9, 11, 15];
let target = 22;
let ans;
let i = 0;
let j = arr.length - 1;
while (i < j) {
  let sum = arr[i] + arr[j];
  if (sum > target) --j;
  else if (sum < target) ++i;
  else {
    ans = [i, j];
    break;
  }
}
console.log(ans);
