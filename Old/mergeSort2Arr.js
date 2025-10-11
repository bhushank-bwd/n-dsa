let num1 = [1, 3, 3, 8, 12, 0, 0, 0, 0, 0];
let num2 = [2, 2, 5, 9, 11];

let p1 = 0;
let p2 = 0;
let m = num1.length - num2.length;
let n = num2.length;

let num1Copy = num1.slice(0, m);
// console.log(m, n, num1Copy, num1, num2);
for (let i = 0; i < m + n; i++) {
  if (p2 >= n || num1Copy[p1] < num2[p2]) {
    num1[i] = num1Copy[p1];
    p1++;
  } else {
    num1[i] = num2[p2];
    p2++;
  }
}
console.log(num1);
let p11 = m - 1;
let p22 = n - 1;
let nums1 = [1, 3, 3, 8, 12, 0, 0, 0, 0, 0];
let nums2 = [2, 2, 5, 9, 11];
for (let i = m + n - 1; i >= 0; i--) {
  if (p22 < 0) break;

  if (p11 >= 0 && nums1[p11] > nums2[p22]) {
    nums1[i] = nums1[p11--];
  } else {
    nums1[i] = nums2[p22--];
  }
}
console.log(34, nums1);
