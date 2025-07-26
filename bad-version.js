function isBad(middle) {
  let firstBadVersion = 7;
  if (middle >= firstBadVersion) return true;
  return false;
}

function findBadVersionList(n) {
  let R = n;
  let L = 1;
  while (L < R) {
    let M = Math.floor(L + (R - L) / 2);
    if (!isBad(M)) {
      L = M + 1;
    } else {
      R = M;
    }
  }
  return R;
}
console.log(findBadVersionList(10));
