## Two Sum

1. map with value:index
2. find difference between current element and target exists in map but i!=difference.index

## Two Sum with sorted Array

1. two index start and end
2. while start < end
   1. sum of both index element
      1. sum greater than target then decrease end
      2. else sum lesser then increase start
      3. return both index

## Is Subsequence of another string

- `adg`, `abdfgn` :white_check_mark:
- `agd`, `abdfgn` :x:

- i and j with o
- while j < t.length
  - if s ith element == t's jth element
    - increase i
  - increase j
- return i == s.length

## Find Index of First Occurrence in String

- Get heyStack and needle length
- run for i loop for i <= h-n
  - run j for loop with needle length
    - compare h[i+j] to needle[j] break if mismatch
  - return i if j==n
- return -

## Find Intersect of two linked list

- Find length m,n
- keep first headA of min length using swap
- keep second pointer at difference of length
- while both pointer as not same move to next
- return any pointer

## Find Max Water

- i at start j=end
- while i < j
  - find area by min of i/j element \* j-i
  - keep max area
  - increment/decrement index by min element between index
