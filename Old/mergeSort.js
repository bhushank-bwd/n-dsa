let num1 = [-5, 12, -7, 3, 11, 14, 12, 67, 32];
let num2 = [5, 4, 3, 2, 1, 15, 0];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid));
  return merge(leftArr, rightArr);
}
function merge(leftArr, rightArr) {
  let res = [];
  let l = 0;
  let r = 0;

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] < rightArr[r]) {
      res.push(leftArr[l]);
      l++;
    } else {
      res.push(rightArr[r]);
      r++;
    }
  }
  return [...res, ...leftArr.slice(l), ...rightArr.slice(r)];
}
console.log(mergeSort(num1));
console.log(mergeSort(num2));
