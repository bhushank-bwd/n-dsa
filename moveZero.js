let num = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let x = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] != 0) {
    num[x] = num[i];
    // num[i] = 0; // this will not work for non zero element array
    x++;
  }
}
// this will work for non zero element array
for (let i = x; i < num.length; i++) {
  num[i] = 0;
}
console.log(num);
