function firstApproach(n1, m, n2, n) {
  let nCopy = n1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nCopy[p1] < n2[p2])) {
      n1[i] = nCopy[p1];
      p1++;
    } else {
      n1[i] = n2[p2];
      p2++;
    }
  }
  return n1;
}
function secondApproach(n1, m, n2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let i = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && n1[p1] > n2[p2]) {
      n1[i] = n1[p1];
      p1--;
    } else {
      n1[i] = n2[p2];
      p2--;
    }
    i--;
  }
  return n1;
}
let num11 = [1, 2, 3, 0, 0, 0];
let num21 = [2, 5, 6];
let num12 = [1, 2, 3, 7, 0, 0, 0];
let num22 = [2, 4, 5];
// console.log(firstApproach(num11, 3, num21, 3));
// console.log(firstApproach(num12, 4, num22, 3));
console.log(secondApproach(num11, 3, num21, 3));
console.log(secondApproach(num12, 4, num22, 3));
