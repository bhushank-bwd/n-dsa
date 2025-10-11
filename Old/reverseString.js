let str = ["h", "e", "l", "l", "o", "s", "x"];
let halfLen = Math.floor(str.length / 2);
for (let i = 0; i < halfLen; i++) {
  let temp = str[i];
  str[i] = str[str.length - 1 - i];
  str[str.length - 1 - i] = temp;
}
console.log(str);
