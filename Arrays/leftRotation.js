/**
 *
 * Author: Dmitriy Shin
 * Date: April 21, 2020
 * Program name: Left Rotation
 * Simplified problem explanation:
 *  Create a function that takes an array and a number
 *  that counts the nubmer of times to rotate the array
 *
 *
 */

const rotLeft = (arr = [], d = 0) => {
  for (let i = 0; i < d; i++) arr.push(arr.shift())
  return arr
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))
