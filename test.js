let arr = [3, 1, 0, 4, 2];

function missingNumber(arr) {
  const length = arr.length;
  const totalSum = (length * (length + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < arr.length; i++) {
    partialSum = partialSum + arr[i];
  }
  return totalSum - partialSum;
}
console.log(missingNumber(arr));
