/**
 *
 * Author: Dmitriy Shin
 * Date: April 27, 2020
 * Program name: Hash Tables - Ransom Note
 * Explanation:
 *  Complete the checkMagazine function in the editor below.
 *  It must print Yes if the note can be formed using the magazine, or No
 *  checkMagazine has the following parameters:
 *    magazine: an array of strings, each a word in the magazine
 *    note: an array of strings, each a word in the ransom note
 *
 */

const fs = require('fs')

const checkMagazine = (magazine = [], note = []) => {
  if (
    note.some((word) => !magazine.includes(word)) ||
    note.length > magazine.length
  )
    return 'No'

  const magazineOccurences = {}
  for (let word of magazine)
    magazineOccurences[word] = (magazineOccurences[word] || 0) + 1

  for (let word of note) {
    if (!magazineOccurences[word] || magazineOccurences[word] < 1) return 'No'
    magazineOccurences[word] -= 1
  }

  return 'Yes'
}

console.log(
  checkMagazine(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
  )
)
// Yes

console.log(
  checkMagazine(
    ['two', 'times', 'three', 'is', 'not', 'four'],
    ['two', 'times', 'two', 'is', 'four']
  )
)
// No

console.log(
  checkMagazine(
    ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
    ['ive', 'got', 'some', 'coconuts']
  )
)
// No

console.log(
  checkMagazine(
    ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
    ['ive', 'got', 'some', 'coconuts']
  )
)
// No
