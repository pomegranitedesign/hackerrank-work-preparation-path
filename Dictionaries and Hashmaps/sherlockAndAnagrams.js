/**
 *
 * Author: Dmitriy Shin
 * Date: April 28, 2020
 * Program name: Sherlock and Anagrams
 * Explanation:
 *   Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string.
 *   Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
 *
 */

const sherlockAndAnagrams = (s = '') => {
  const output = []
  let totalAnagrams = 0

  // Find all single characters
  const sorted = s.split('').sort().join('')
  for (let i = 0; i < sorted.length; i++)
    if (sorted[i] === sorted[i + 1]) {
      output.push([i, i + 1])
      totalAnagrams++
    }

  // Start looking for length 2 matches
  const doubles = []
  for (let i = 0; i < s.length - 1; i++) {
    // Check if the pair index combination (e.g. [1, 2] or [4, 5]) are not in output array
    // if not then add this pair into output
    for (let j = i + 2; j < s.length; j++) {}
  }

  // Start looking for length 3 matches
  console.log(output)

  return `${totalAnagrams}\n\n`
}

// console.log(sherlockAndAnagrams('mom')) // 3
console.log(sherlockAndAnagrams('abba')) // 4
console.log(sherlockAndAnagrams('abcd')) // 0
console.log(sherlockAndAnagrams('ifailuhkqq')) // 3
console.log(sherlockAndAnagrams('kkkk')) // 10
