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
console.log(isIsomorphic("add", "egg"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("bar", "foo"));
console.log(isIsomorphic("foo", "bar"));
