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
// console.log(
//   findWordContainingChar(["abc", "aa", "btu", "sdsda", "sdsffdg"], "a")
// );
function findStoneJewel(stones, jewels) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count++;
        break;
      }
    }
  }

  return count;
}
function findStoneJewel1(stones, jewels) {
  let count = 0;
  let jewelSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jewelSet.add(jewels[i]);
  }
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      count++;
    }
  }
  return count;
}
// console.log(findStoneJewel("aAAbbbB", "aA"), findStoneJewel("z", "ZZZAAAA"));
// console.log(findStoneJewel1("aAAbbbB", "aA"), findStoneJewel1("z", "ZZZAAAA"));

function findMaxVowelAndConsonant(word) {
  let countMap = {};
  for (let i = 0; i < word.length; i++) {
    countMap[word[i]] = !countMap[word[i]] ? 1 : ++countMap[word[i]];
  }
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowelCount = 0;
  let maxConsonantCount = 0;

  let countMapKeys = Object.keys(countMap);

  for (let i = 0; i < countMapKeys.length; i++) {
    const element = countMapKeys[i];
    if (vowels.includes(element)) {
      maxVowelCount = Math.max(countMap[element], maxVowelCount); // use if for simple beginner level
    } else {
      maxConsonantCount = Math.max(countMap[element], maxConsonantCount); // use if for simple beginner level
    }
  }
  return maxConsonantCount + maxVowelCount;
}

console.log(
  findMaxVowelAndConsonant("successes"),
  findMaxVowelAndConsonant("aeiaeia")
);
