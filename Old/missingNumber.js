let num = [0, 1, 3, 2, 5, 6, 4, 8];
let n = num.length;

let totalSum = (n * (n + 1)) / 2;
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(totalSum - sum);
