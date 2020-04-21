/**
 *
 * Author: Dmitriy Shin
 * Date: April 7, 2020
 * Program name: Jumping on clouds
 * Simplified problem explanation: Return a minimum number of jumps required to win the game
 *
 */

const jumpingOnClouds = (c = []) => {
  let minJumps = 0
  for (let index = 0; index < c.length; ) {
    if (c[index] === 0 && c[index + 2] === 0) {
      minJumps++
      index += 2
    } else if (c[index] === 0 && c[index + 1] === 0 && c[index + 2] !== 0) {
      minJumps++
      index++
    } else break
  }
  return minJumps
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // -> 4
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])) // -> 3
