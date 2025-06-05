let arr = [-25, -44, -44, -12, -768, -543, -768, -12];
function findLargest(arr) {
  // let largest = arr[0];
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}
function findSmallest(arr) {
  let smallest = arr[0];
  // let smallest = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log(smallest);
}
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return console.log(null);
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  console.log(secondLargest);
}
findSecondLargest(arr);
findSmallest(arr);
findLargest(arr);
