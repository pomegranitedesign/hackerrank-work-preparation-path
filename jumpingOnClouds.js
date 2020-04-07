/**
 *
 * Author: Dmitriy Shin
 * Date: April 7, 2020
 * Program name: Jumping on clouds
 * Simplified problem explanation: Return a minimum number of jumps required to win the game
 *
 */

const jumpingOnClouds = (c = []) => {
  const firstPossibleJumps = c
    .map((cloud, index) => (cloud !== 1 ? index : null))
    .filter((cloud) => cloud !== null).length

  let currentMinJumps = firstPossibleJumps
  const start = 0 // Index of the starting point
  const end = c.length - 1 // Index of the end point

  for () {}

  return 
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // -> 4
// console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])) // -> 3
// console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])) // -> 4
