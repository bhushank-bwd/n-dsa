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

// console.log(
//   findMaxVowelAndConsonant("successes"),
//   findMaxVowelAndConsonant("aeiaeia")
// );
function findBalancedRL(s) {
  let R = 0;
  let L = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      ++R;
    } else {
      ++L;
    }
    if (L == R) {
      L = R = 0;
      ++count;
    }
  }
  return count;
}
function findBalancedRL1(s) {
  let temp = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      ++temp;
    } else {
      --temp;
    }
    if (temp == 0) {
      ++count;
    }
  }
  return count;
}
// console.log(findBalancedRL("RLRRLLRLRL"), findBalancedRL("RRRRLLLL"));
// console.log(findBalancedRL1("RLRRLLRLRL"), findBalancedRL1("RRRRLLLL"));

function reverseStringByKAnd2K(s, k) {
  s = s.split("");
  for (let x = 0; x < s.length; x = x + 2 * k) {
    let mid = Math.floor(k / 2);
    for (let i = 0; i < mid; i++) {
      let temp = s[x + k - i - 1];
      s[x + k - i - 1] = s[x + i];
      s[x + i] = temp;
    }
  }
  return s.join("");
}
// console.log(
//   reverseStringByKAnd2K("ABCDEFGH", 2),
//   reverseStringByKAnd2K("ABCDEFGHIJ", 2),
//   reverseStringByKAnd2K("ABCDEFGHI", 2)
// );

function isPalindrome(s) {
  s = s.toLowerCase();
  let filteredString = "";
  let reverseString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
      reverseString = s[i] + reverseString;
    }
  }
  console.log(reverseString, filteredString);
  return reverseString === filteredString;
}
function isPalindrome1(s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      ++i;
    } else if (!s[j].match(/[a-z0-9]/i)) {
      --j;
    } else if (s[i] == s[j]) {
      ++i;
      --j;
    } else {
      return false;
    }
  }
  return true;
}
// console.log(
//   isPalindrome("race a car"),
//   isPalindrome(" "),
//   isPalindrome("A man, a plan, a canal:Panama")
// );
// console.log(
//   isPalindrome1("race a car"),
//   isPalindrome1(" "),
//   isPalindrome1("A man, a plan, a canal:Panama")
// );

function largestOddInString(s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] % 2 == 1) {
      return s.substring(0, n + 1);
    }
    --n;
  }
  return "";
}
// console.log(
//   largestOddInString("31217"),
//   largestOddInString("4206"),
//   largestOddInString("154568")
// );
function findLongestPrefix(str) {
  let x = 0;
  while (x < str[0].length) {
    let ch = str[0][x];
    for (let i = 1; i < str.length; i++) {
      if (ch != str[i][x] || x == str[i].length) {
        return str[0].substring(0, x);
      }
    }
    ++x;
  }
  return str[0];
}
// console.log(findLongestPrefix(["flower", "flight", "flow", "fl"]));
// console.log(findLongestPrefix(["flower", "fl", "flight", "flow"]));
// console.log(findLongestPrefix(["abc", "pqr"]));

function isAnagram(s, t) {
  if (t.length !== s.length) return false;

  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (!map[t[j]] || map[t[j]] < 0) {
      return false;
    } else {
      map[t[j]]--;
    }
  }
  return true;
}
console.log(
  isAnagram("anagram", "nagaram"),
  isAnagram("anagram", "anag"),
  isAnagram("anagram", "anagaam")
);
