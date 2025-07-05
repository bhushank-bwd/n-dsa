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
