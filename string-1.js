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
function lastWordLength2(s) {
  let lastIndex = s.length - 1;
  let count = 0;
  while (lastIndex >= 0) {
    if (s[lastIndex] != " ") {
      ++count;
    } else if (count > 0) {
      break;
    }

    --lastIndex;
  }
  return count;
}
// console.log(
//   lastWordLength("Hello World"),
//   lastWordLength("Hello Master "),
//   lastWordLength(" ")
// );
// console.log(
//   lastWordLength2("Hello World"),
//   lastWordLength2("Hello Master "),
//   lastWordLength2(" ")
// );
function findWordContainingChar(wordArr, char) {
  let res = [];
  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < wordArr[i].length; j++) {
      if (wordArr[i][j] === char) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}
console.log(
  findWordContainingChar(["abc", "aa", "btu", "sdsda", "sdsffdg"], "a")
);
