let arr = [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

function maxConsecutiveOne(arr) {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      maxCount = currentCount > maxCount ? currentCount : maxCount;
      currentCount = 0;
    }
    if (arr[i] == 1) {
      ++currentCount;
    }
  }
  maxCount = currentCount > maxCount ? currentCount : maxCount;

  return maxCount;
}
console.log(maxConsecutiveOne(arr));
