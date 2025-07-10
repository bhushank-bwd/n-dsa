function lastWordLength(s) {
  let lastIndex = s.length - 1;
  while (lastIndex >= 0) {
    if (s[lastIndex] != " ") break;
    --lastIndex;
  }
  let count = 0;
  while (lastIndex >= 0) {
    if (s[lastIndex] == " ") break;
    --lastIndex;
    ++count;
  }
  return count;
}
console.log(lastWordLength("Hello World"));
console.log(lastWordLength("Hello Master "));
console.log(lastWordLength(" "));
