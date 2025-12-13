let arr1 = [7, 1, 5, 3, 6, 4];
let arr2 = [7, 5, 4, 3, 2, 1, 10];
function maxProfit(num) {
  let min = num[0];
  let profit = 0;
  for (let i = 1; i < num.length; i++) {
    if (num[i] - min > profit) {
      profit = num[i] - min;
    }
    if (num[i] < min) min = num[i];
  }
  return profit;
}
console.log(maxProfit(arr1), maxProfit(arr2));
function moveZero(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  for (let j = x; j < arr.length; j++) {
    arr[j] = 0;
  }
  return arr;
}
let arr3 = [0, 1, 0, 3, 12];
let arr4 = [0, 1, 0, 2, 0, 0];
let arr5 = [1, 2, 3];
let arr6 = [0, 0, 0];
console.log(moveZero(arr3));
console.log(moveZero(arr4));
console.log(moveZero(arr5));
console.log(moveZero(arr6));
