let num = [1, 5, 1, 6, 5, 6, 4, 2, 3, 2, 3];

let xor = 0;
for (let i = 0; i < num.length; i++) {
  const element = num[i];
  xor = xor ^ element;
}
console.log(xor);
// xor rule
// 0 xor a = a
// a xor a = 0
