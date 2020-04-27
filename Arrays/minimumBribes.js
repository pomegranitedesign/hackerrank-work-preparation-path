/**
 *
 * Author: Dmitriy Shin
 * Date: April 21, 2020
 * Program name: Minimum Bribes
 * Explanation:
 *  Complete the function minimumBribes in the editor below.
 *  It must print an integer representing the minimum number of bribes necessary,
 *  or Too chaotic if the line configuration is not possible.
 *  minimumBribes has the following parameter(s): q: an array of integers
 *
 */

const minimumBribes = (q = []) => {
  let nBribes = 0
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic')
      return
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) if (q[j] > q[i]) nBribes++
  }
  console.log(nBribes)
  return nBribes
}

console.log(minimumBribes([1, 2, 3, 4, 5])) // Too chaotic 3
console.log(minimumBribes([1, 2, 3, 4, 5, 6, 7, 8])) // 6
console.log(minimumBribes([1, 2, 3, 4, 5, 6, 7, 8])) // Too chaotic 6
