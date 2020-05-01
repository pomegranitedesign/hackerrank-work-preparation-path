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
    for (let j = 0; j < s.length - 1; j++) {
      const leftSideIndex = [j, j + 2]
      const leftSide = (s[j] + s[j + 1]).split('').sort().join('')

      const rightSideIndex = [j + 1, j + 3]
      const rightSide = (s[j + 1] + s[j + 2]).split('').sort().join('')

      const pairSides = [leftSideIndex, rightSideIndex]
      if (leftSide === rightSide) {
        if (!doubles.some((pair) => pair.toString() === pairSides.toString())) {
          doubles.push(pairSides)
          output.push([leftSideIndex, rightSideIndex].join(', '))
          totalAnagrams++
        }
      }
    }
  }

  const triples = []
  for (let i = 0; i < s.length - 1; s++) {
    for (let j = 0; j < s.length - i; j++) {
      const leftSideIndex = [j, j + 3]
      const leftSide = s
        .slice(j, j + 3)
        .split('')
        .sort()
        .join('')

      const rightSideIndex = [j + 1, j + 4]
      const rightSide = s
        .slice(j + 1, j + 4)
        .split('')
        .sort()
        .join('')

      if (leftSide.length === 3 && rightSide.length === 3) {
        if (leftSide === rightSide) {
          output.push([leftSideIndex, rightSideIndex])
          triples.push([leftSide, rightSide].join(''))
          totalAnagrams++
        }
      }
    }
  }

  console.log(output)
  return `${totalAnagrams}\n\n`
}

console.log(sherlockAndAnagrams('mom')) // 3
console.log(sherlockAndAnagrams('abba')) // 4
console.log(sherlockAndAnagrams('abcd')) // 0
console.log(sherlockAndAnagrams('ifailuhkqq')) // 3
console.log(sherlockAndAnagrams('kkkk')) // 10
