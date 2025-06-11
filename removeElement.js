let num = [1, 3, 2, 2, 3];
let x = 0;
let element = 2;
for (let i = 0; i < num.length; i++) {
  if (num[i] != element) {
    num[x] = num[i];
    x = x + 1;
  }
}
console.log(x, num);
