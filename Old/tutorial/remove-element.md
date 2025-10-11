# Remove element from linked list

## Example

- 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6
- remove element 6 from above list
- 1 -> 2 -> 3 -> 4 -> 5

## Approach

- prev.next = prev.next.next `but will not work for head otner than head it is easy`

### Use sentinel node

- dummy node
- add it to front of linked list
- it helps us delete nodes from starting node

```js
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

list1.printList();
list2.printList();
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
const newHead1 = removeElement(list1, 6);
const newHead2 = removeElement(list2, 6);
list1.printList();
list2.printList();
console.log(newHead1, newHead2);
```

# Remove n<sup>th</sup> element from end with `two pass`

- add sentinel node
- find length
- delete position = (length - n) + 1
- prev = length - n
- use for loop for finding prev

```js
function removeNthElement(list, n) {
  list.addAtHead(null);
  let head = list.head.next;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  console.log(length);
  let prevPosition = length - n;
  let prev = list.head;
  for (let i = 0; i < prevPosition; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
}
removeNthElement(list1, 2);
list1.printList();
```

# Remove n<sup>th</sup> element from end with `one pass`

- add sentinel node
- use two pinter
- place first to sentinel + n using for
- place second to sentinel
- move both pointer one next
- remove element using second pointer

```js
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
```
