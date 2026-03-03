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
