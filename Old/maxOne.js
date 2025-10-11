let num = [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1];

let maxCount = 0;
let currentCount = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] == 1) {
    currentCount++;
  } else {
    maxCount = Math.max(currentCount, maxCount);
    currentCount = 0;
  }
}
maxCount = Math.max(currentCount, maxCount); // always check for last iteration
console.log(maxCount);
