let arr = [3, 7, 9, 1, 1, 3, 2, 2, 7];

function singleNumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}
console.log(singleNumber(arr));
