let arr = [5, 2, 4, 1];
let num = [55, 1, 14, 17, 23, 32, 36];

function sort(tempArr) {
  let n = tempArr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (tempArr[j] > tempArr[j + 1]) {
        let temp = tempArr[j];
        tempArr[j] = tempArr[j + 1];
        tempArr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped) break;
  }
  return tempArr;
}

console.log(sort(arr));
console.log(sort(num));
