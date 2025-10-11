let num = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let x = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] > num[x]) {
    x = x + 1;
    num[x] = num[i];
  }
}
console.log(x + 1, num);
