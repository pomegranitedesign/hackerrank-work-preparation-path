/**
 *
 * Author: Dmitriy Shin
 * Date: April 24, 2020
 * Program name: Array Manipulation
 * Explanation:
 *  Starting with a 1-indexed array of zeros and a list of operations,
 *  for each operation add a value to each of the array element between two given indices, inclusive.
 *  Once all operations have been performed, return the maximum value in your array.
 *  For example, the length of your array of zeros. Your list of queries is as follows:
 *
 */

const arrayManipulation = (n = 0, q = []) => {
  const output = new Array(n + 1).fill(0)
  for (let i = 0; i < q.length; i++) {
    const a = q[i][0]
    const b = q[i][1]
    const k = q[i][2]

    output[a - 1] += k
    if (b <= output.length) output[b] -= k
  }

  let sum = 0,
    max = 0

  for (let n of output) {
    sum += n
    if (max < sum) max = sum
  }

  return max
}

const testingArray = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
]

console.log(arrayManipulation(5, testingArray))
console.log(
  arrayManipulation(4, [
    [2, 3, 603],
    [1, 1, 286],
    [4, 4, 882],
  ])
)
