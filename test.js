let s = "bad";
let t = "ahbgdc";

function isSubSequence(s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] == t[j]) ++i;
    ++j;
  }
  return i == s.length;
}
console.log(isSubSequence(s, t));
