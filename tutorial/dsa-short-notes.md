# Stack

## MinStack with O(1) Time Complexity

- **Push** -> while pushing keep min value track of comparing current element and last element and push([currentElement,minVal])
- pop is normal; top = lastElement[0]; min = lastElement[1]

## Remove Outer most parentheses

- Mark level of nesting
- remove 0(index-0 length-1) level nesting
- in loop push for `(` and pop for `)`
- meanwhile `before popping` element and `after pushing` element put char in ans if `length > 1`

## Remove Outer most parentheses without stack

- in loop increase level(++) for `(` and decrease level(--) for `)`
- meanwhile `before decrease` element and `after increase` element put char in ans if `level > 1`

## Evaluate Reverse Polish Notation

- For Loop
  - If operator get last two element by pop and perform operation(by map/eval) and push result in stack
    - Tak care of string and number
  - if number then push it into stack
- return top

## Next Greater Element

- Num1=[] Num2=[] num1 is subset of num2 and All element of array is unique
- num1Len != num2Len
- Find next greater element of each num1 element in num2, -1 if not found
- last has -1 and push it into stack and map
- Find each num2 element greater next element

  - for loop from last second element to first element
  - while on stack.length
    - if top < current element then pop
    - if top > current then map top to current element
  - stack.length==0 then map -1 to current element
  - push element in stack

- Store above in map
- Find `NGE` in map for num1

## Daily Temperatures

> Wait for next warmer days

- num array with duplicate and keep next n warmer days if not then 0
- initialize num length ans with 0
- push last index in stack
- for loop from last second element to first element
  - while stack length
    - num[top]<=num[i] then pop
    - else ans[i] = top-1
  - stack length = 0 then ans[i] = 0
  - push i in stack
- return i

## Next greater Element

### Using Double Array

- double array
- ans with -1 for array length
- stack push last element
- for loop from last second element to first element
  - while stack length
    - current element >= top then pop
    - else current element = top in ans and break
  - push current element in stack
- return ans slicing half length

### Without double array

- for loop with 2n-2
- whenever using for index mod it with n that is length of array
- no slice of ans needed

## Rotten Oranges

- push indexes of all rotten oranges[2] in queue
- maxMinute = o
- while queue length
  - current element [x,y,level] = queue shift
  - check for all 4 adjacent nodes(with index existed) that has 1 and push in queue(x,y,level+1)
  - check max maxMinute and level
- if any 1 exists then return -1
- return maxMinute

# Binary search algorithm

## finding square root

- square root of x
  - x < 2 then return x
  - x >= 2 then square root of x never exceeds x/2
- while range 2 .. x/2
- while
  - l<=r
  - m = Math.Floor (l+r)/2
  - x = m<sup>2</sup> return m
  - x > m<sup>2</sup> l=m+1
  - else r=m-1
- return r

## finding middle element best practice

- middle = (left + right) /2
  - (left + right) can goes overflow due to data limitation in some lang.

> middle = left + ((right-left)/2)

## Search in rotational search list

- L=0; R=lastIndex
- While L<=R
  - Find M and if target match then return M
  - If Find Left is sorted L<=M
    - Find Target is in left by comparing left and middle
      - yes Move R
      - no Move L
  - ELSE
    - Find the target second half by comparing middle and right
      - yes Move L
      - no Move R
- return -1
