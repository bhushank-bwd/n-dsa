function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let mST = {};
  let mapTS = {};

  for (let i = 0; i < s.length; i++) {
    if (!mST[s[i]] && !mapTS[t[i]]) {
      mST[s[i]] = t[i];
      mapTS[t[i]] = s[i];
    } else if (mapTS[t[i]] !== s[i]) {
      return false;
    } else if (mST[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
}
// console.log(isIsomorphic("add", "egg"));
// console.log(isIsomorphic("paper", "title"));
// console.log(isIsomorphic("bar", "foo"));
// console.log(isIsomorphic("foo", "bar"));

function groupAnagram(words) {
  let map = {};
  for (let i = 0; i < words.length; i++) {
    let sortedKey = words[i].split("").sort().join("");
    if (!map[sortedKey]) {
      map[sortedKey] = [words[i]];
    } else {
      map[sortedKey].push(words[i]);
    }
  }
  return [...Object.values(map)];
}
console.log(groupAnagram(["ate", "tea", "tan", "nat", "bat", "ant"]));
function groupAnagram2(words) {
  let map = {};
  for (let i = 0; i < words.length; i++) {
    let frequencyArr = Array(26).fill(0);

    for (let j = 0; j < words[i].length; j++) {
      let index = words[i][j].charCodeAt() - "a".charCodeAt();
      ++frequencyArr[index];
    }

    let sortedKey = "";
    for (let k = 0; k < 26; k++) {
      sortedKey = sortedKey + String.fromCharCode(k) + frequencyArr[k];
    }

    if (!map[sortedKey]) {
      map[sortedKey] = [words[i]];
    } else {
      map[sortedKey].push(words[i]);
    }
  }
  return [...Object.values(map)];
}
console.log(
  groupAnagram2(["ate", "tea", "tan", "nat", "bat", "ant", "tab", "lab"])
);
