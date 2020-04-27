/**
 *
 * Author: Dmitriy Shin
 * Date: April 23, 2020
 * Program name: Minimum Swaps 2
 * Explanation:
 *  You are given an unordered array consisting of consecutive integers [1, 2, 3, ..., n]
 *  without any duplicates. You are allowed to swap any two elements.
 *  You need to find the minimum number of swaps required to sort the array in ascending order.
 *
 */

const minimumSwaps = (arr = []) => {
  let totalSwaps = 0

  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== i - 1) totalSwaps += swap(arr, i)

  return totalSwaps
}

const swap = (arr, index) => {
  let nSwaps = 0

  let current = arr[index]
  let target = arr[current - 1]
  while (current !== target) {
    arr[index] = target
    arr[current - 1] = current

    nSwaps++

    current = target
    target = arr[current - 1]
  }

  return nSwaps
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]))
console.log(minimumSwaps([4, 3, 1, 2]))
console.log(minimumSwaps([2, 3, 4, 1, 5]))
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))
console.log(
  minimumSwaps([
    2,
    31,
    1,
    38,
    29,
    5,
    44,
    6,
    12,
    18,
    39,
    9,
    48,
    49,
    13,
    11,
    7,
    27,
    14,
    33,
    50,
    21,
    46,
    23,
    15,
    26,
    8,
    47,
    40,
    3,
    32,
    22,
    34,
    42,
    16,
    41,
    24,
    10,
    4,
    28,
    36,
    30,
    37,
    35,
    20,
    17,
    45,
    43,
    25,
    19,
  ])
)
