function Node(value) {
  this.value = value;
  this.next = null;
}
function ListNode(value, next) {
  this.value = value === undefined ? 0 : value;
  this.next = next === undefined ? null : next;
}
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else {
    let newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }
};
MyLinkedList.prototype.isPalindrome = function () {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  let firstHalf = this.head;
  let secondHalf = prev;
  while (secondHalf) {
    if (firstHalf.value != secondHalf.value) {
      return false;
    }
    secondHalf = secondHalf.next;
    firstHalf = firstHalf.next;
  }
  return true;
};
MyLinkedList.prototype.getAtIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next;
  return curr.value;
};
MyLinkedList.prototype.getNodeAtIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next;
  return curr;
};
MyLinkedList.prototype.printList = function () {
  let current = this.head;
  let result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> "));
};
let ll1 = new MyLinkedList();
ll1.addAtHead(1);

let ll2 = new MyLinkedList();
ll2.addAtHead(1);
ll2.addAtIndex(1, 2);
ll2.addAtIndex(2, 1);

let ll3 = new MyLinkedList();
ll3.addAtHead(1);
ll3.addAtIndex(1, 2);
ll3.addAtIndex(2, 2);
ll3.addAtIndex(3, 1);

let ll4 = new MyLinkedList();
ll4.addAtHead(1);
ll4.addAtIndex(1, 2);
ll4.addAtIndex(2, 2);
ll4.addAtIndex(3, 3);

let ll5 = new MyLinkedList();
ll5.addAtHead(1);
ll5.addAtIndex(1, 2);
// console.log(
//   ll1.isPalindrome(),
//   ll2.isPalindrome(),
//   ll3.isPalindrome(),
//   ll4.isPalindrome(),
//   ll5.isPalindrome()
// );

let intersectLL1 = new MyLinkedList();
let intersectLL2 = new MyLinkedList();
let intersectLL3 = new MyLinkedList();

intersectLL1.addAtHead("a1");
intersectLL1.addAtIndex(1, "a2");

intersectLL2.addAtHead("c1");
intersectLL2.addAtIndex(1, "c2");
intersectLL2.addAtIndex(2, "c3");

intersectLL3.addAtHead("b1");
intersectLL3.addAtIndex(1, "b2");
intersectLL3.addAtIndex(2, "b3");

intersectLL3.getNodeAtIndex(intersectLL3.size - 1).next =
  intersectLL2.getNodeAtIndex(0);
intersectLL1.getNodeAtIndex(intersectLL1.size - 1).next =
  intersectLL2.getNodeAtIndex(0);

var isIntersect = function (headA, headB) {
  let store = new Set();
  while (headB) {
    store.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  console.log("hello");
  return null;
};
// console.log(
//   intersectLL1,
//   intersectLL2,
//   intersectLL3,
//   isIntersect(intersectLL1.head, intersectLL3.head)
// );

let list1 = new MyLinkedList();
list1.addAtIndex(0, 1);
list1.addAtIndex(1, 2);
list1.addAtIndex(2, 6);
list1.addAtIndex(3, 3);
list1.addAtIndex(4, 4);
list1.addAtIndex(5, 5);
list1.addAtIndex(6, 6);

let list2 = new MyLinkedList();
list2.addAtIndex(0, 6);
list2.addAtIndex(1, 2);
list2.addAtIndex(2, 6);
list2.addAtIndex(3, 3);

// list1.printList();
// list2.printList();
function removeElement(list, value) {
  list.addAtHead(null);
  let prev = list.head;
  while (prev && prev.next) {
    // use next check if you want use next.next
    if (prev.next.value == value) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return list.head.next; // it will be head as sn alway at head
}
// const newHead1 = removeElement(list1, 6);
// const newHead2 = removeElement(list2, 6);

function removeNthElement(list, n) {
  list.addAtHead(null);
  let head = list.head.next;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  let prevPosition = length - n;
  let prev = list.head;
  for (let i = 0; i < prevPosition; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
}
// removeNthElement(list1, 2);
// list1.printList();
function removeNthElementOnePass(list, n) {
  list.addAtHead(null);
  let first = list.head;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  let second = list.head;
  while (first.next) {
    second = second.next;
    first = first.next;
  }
  second.next = second.next.next;
}
// removeNthElementOnePass(list1, 3);
// list1.printList();
function removeDuplicateFromSorted(list) {
  let curr = list.head;
  while (curr && curr.next) {
    if (curr.value == curr.next.value) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
}
let list3 = new MyLinkedList();
list3.addAtIndex(0, 1);
list3.addAtIndex(1, 1);
list3.addAtIndex(2, 1);
list3.addAtIndex(3, 2);
list3.addAtIndex(4, 3);
list3.addAtIndex(5, 3);
list3.addAtIndex(6, 4);
list3.addAtIndex(7, 4);

// list3.printList();
// removeDuplicateFromSorted(list3);
// list3.printList();

function oddEvenList(list) {
  if (!list.head || !list.head.next) return;
  let odd = list.head;
  let even = list.head.next;
  let evenStart = even;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
}

let list4 = new MyLinkedList();
list4.addAtIndex(0, 1);
list4.addAtIndex(1, 2);
list4.addAtIndex(2, 3);
list4.addAtIndex(3, 4);
list4.addAtIndex(4, 5);
list4.addAtIndex(5, 6);
list4.addAtIndex(6, 7);
list4.addAtIndex(7, 8);

// list4.printList();
// oddEvenList(list4);
// list4.printList();

function addTwoNumber(l1, l2) {
  let carry = 0;
  let ans = new ListNode();
  let ansHead = ans;
  while (l1 || l2 || carry) {
    let sum = (l1?.value || 0) + (l2?.value || 0) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let node = new ListNode(digit);
    ans.next = node;
    ans = ans.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  while (ansHead) {
    console.log(ansHead.value);
    ansHead = ansHead.next;
  }
}
let list5 = new MyLinkedList();
list5.addAtIndex(0, 3);
list5.addAtIndex(1, 4);
list5.addAtIndex(2, 9);

let list6 = new MyLinkedList();
list6.addAtIndex(0, 4);
list6.addAtIndex(1, 8);
list6.addAtIndex(2, 1);
list6.addAtIndex(3, 9);
// addTwoNumber(list5.head, list6.head);

function mergeSort(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let curr = null;
  if (l1.value < l2.value) {
    curr = l1;
    l1 = l1.next;
  } else {
    curr = l2;
    l2 = l2.next;
  }
  let start = curr;
  while (l1 && l2) {
    if (l1.value < l2.value) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return start;
}
let list7 = new MyLinkedList();
list7.addAtIndex(0, 3);
list7.addAtIndex(1, 4);
list7.addAtIndex(2, 7);

let list8 = new MyLinkedList();
list8.addAtIndex(0, 5);
list8.addAtIndex(1, 6);
list8.addAtIndex(2, 8);
list8.addAtIndex(3, 10);
// let head = mergeSort(list7.head, list8.head);
// while (head) {
//   console.log(head.value);
//   head = head.next;
// }
function mergeSortTwo(l1, l2) {
  let curr = new ListNode();
  let start = curr;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return start;
}
let list9 = new MyLinkedList();
list9.addAtIndex(0, 3);
list9.addAtIndex(1, 4);
list9.addAtIndex(2, 7);

let list10 = new MyLinkedList();
list10.addAtIndex(0, 5);
list10.addAtIndex(1, 6);
list10.addAtIndex(2, 8);
list10.addAtIndex(3, 10);
// let head2 = mergeSort(list7.head, list8.head);
// while (head2) {
//   console.log(head2.value);
//   head2 = head2.next;
// }

function rotate(head, k) {
  if (!head || !head.next) return null;

  let curr = head;
  let length = 0;
  while (curr) {
    curr = curr.next;
    length++;
  }
  k = k % length;

  let s = head;
  let f = head;
  for (let i = 0; i < k; i++) {
    f = f.next;
  }
  while (f.next) {
    s = s.next;
    f = f.next;
  }
  f.next = head;
  let newHead = s.next;
  s.next = null;
  return newHead;
}
list10.printList();
let head2 = rotate(list10.head, 2);
while (head2) {
  console.log(head2.value);
  head2 = head2.next;
}
