/**
 *
 * Author: Dmitriy Shin
 * Date: April 7, 2020
 * Program name: Counting Valleys
 * Simplified problem explanation: Count the total number of the valleys
 *
 */

const countingValleys = (n, s = '') => {
  const numberedSteps = [...s].map((step) => (step === 'U' ? 1 : -1))
  let transformedPath = 0
  let inValley = false
  let nValleys = 0
  for (let step of numberedSteps) {
    transformedPath += step
    if (transformedPath < 0 && !inValley) inValley = true
    if (transformedPath == 0 && inValley) {
      nValleys++
      inValley = false
    }
  }
  return nValleys
}

console.log(countingValleys(8, 'UDDDUDUU')) // -> 1
