/**
 *
 * Author: Dmitriy Shin
 * Date: April 20, 2020
 * Program name: 2D Array - DS
 * Simplified problem explanation:
 *  Complete the hourglassSum function that accepts the arr as the parameter
 *
 */

const hourglassSum = (arr = []) => {
  const output = []
  for (let i = 0; i < 4; i++)
    for (let k = 0; k < 4; k++)
      output.push(
        arr[i][k] +
          arr[i][k + 1] +
          arr[i][k + 2] +
          arr[i + 1][k + 1] +
          arr[i + 2][k] +
          arr[i + 2][k + 1] +
          arr[i + 2][k + 2]
      )

  return Math.max(...output)
}

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]

const arr2 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]

console.log(hourglassSum(arr)) // 19
console.log(hourglassSum(arr2)) // 28
