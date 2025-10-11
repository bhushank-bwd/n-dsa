# Linked List

- Linear data structure
- Node are linked together by reference field

## Node

- Value/Data
- Head - starting node of the linked list
- pointer
- tail - end node(null)

## Types

- **Singly Linked list** - Each node has pointer to next node
- **Doubly linked list** - Each node has 2 pointer to next and previous node

## Array vs Linked List

|                   | Array                       | Linked List             |
| ----------------- | --------------------------- | ----------------------- |
|                   | Linear data structure       | Linear data structure   |
|                   | Contiguous Space            | Non-contiguous Space    |
|                   | Fixed Size (can be dynamic) | Dynamic(change easily)  |
|                   | Just Value                  | Node -> Value & Pointer |
| Getting Element   | Easy TC(O(1))               | Difficult O(N)          |
| Insert and delete | Complex                     | Easy                    |
| Memory            | Memory Efficient            | Extra Memory            |

## Use Case

- **Array**
  - if access element by index
  - memory efficient storage for static size
- **Linked List**
  - Insert and delete at head/tail frequently
  - Avoid resize overhead or unknown size up
  - Do lots of traversal and manipulation

## Node

- **Value and reference** -> points to next node

```js
function Node(value) {
  this.value = value;
  this.next = null;
}
let newNode = new Node(value);
```

## Linked List

```js
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}
```

- it initialize new linked list with 0 size

### Add at head

```js
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};
```

### Add at tail

- create new node
- reach last node
- link last node -> new Node
- handle corner case i.e. linked list is empty
- increase size

```js
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
```

### Add at index

- create new node
- reach at index-1 = current
- newNode.next = curr.next
- curr.next = newNode
- handle corner case index == 0 or index == this.size
- increase size if not corner case

```js
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
```

### Get Value from node

```js
MyLinkedList.prototype.getAtIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next;
  return curr.value;
};
```

### Delete At Index

```js
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) this.head = this.head.next;
  else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    curr.next = curr.next.next;
  }
  this.size--;
};
```

- only change next of index-1 node's next
- reduce size

## Find middle of linked list

> if there are two middle then return second middle in case of even size linked list

### Approach 1 -> Array

- convert list into array
- array[length/2] = middle of array

### Approach 2

> Fast and slow Pointer

- 1->2->3->4->5->6->7->8->9->10->11->12
- s->s->s->s->s->s->s
- f->->f->->f->->f->->f->->f->->f->->f

```js
MyLinkedList.prototype.findMiddle = function () {
  let fast = this.head;
  let slow = this.head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
```

- always check function signature to check input parameter and return type

## Reverse list

```js
MyLinkedList.prototype.reverseLinkList = function () {
  let prev = null;
  let curr = this.head;
  while (curr) {
    let temp = curr.next; // take backup of next as link list will broke
    curr.next = prev;
    prev = curr;
    curr = temp; // keep for next iteration if not null
  }
  this.head = prev;
  //   return prev; // as prev becomes head after all iteration
};
```

## Print list

```js
MyLinkedList.prototype.printList = function () {
  let current = this.head;
  let result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> "));
};
```
