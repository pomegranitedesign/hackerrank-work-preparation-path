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

  const singles = []
  for (let i = 0; i < s.length; i++)
    for (let j = i + 1; j < s.length; j++)
      if (s[i] === s[j]) {
        singles.push([s[i], s[j]])
        output.push([i, j])
        totalAnagrams++
      }

  const doubles = []
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const letterPair = [s[i], s[j]]
      const indexPair = [i, j]

      if (letterPair[0] === letterPair[1]) {
        if (!output.some((pair) => pair.toString() === indexPair.toString())) {
          output.push(indexPair)
          doubles.push(letterPair)
          totalAnagrams++
        }
      }
    }
  }

  // Start looking for length 3 matches
  const triples = []
  for (let i = 0; i < s.length; s++) {
    const leftSide = s.slice(i, i + 3)
    for (let j = 3; j < s.length; j++) {
      const rightSide = s.slice(j, j + 3)

      console.log(leftSide, rightSide)
    }
  }
  console.log(output)

  return `${totalAnagrams}\n\n`
}

// console.log(sherlockAndAnagrams('mom')) // 3
console.log(sherlockAndAnagrams('abba')) // 4
console.log(sherlockAndAnagrams('abcd')) // 0
console.log(sherlockAndAnagrams('ifailuhkqq')) // 3
console.log(sherlockAndAnagrams('kkkk')) // 10
