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

const checkMagazine = (magazine = [], note = []) => {
  const magazineOccurences = getOccurences(magazine)
  const noteOccurences = getOccurences(note)

  for (let magazineWord in magazineOccurences) {
    for (let noteWord in noteOccurences) {
      if (
        magazineOccurences[magazineWord] < noteOccurences[noteWord] ||
        !magazine.includes(noteWord)
      )
        return 'No'
    }
  }

  return 'Yes'
}

const getOccurences = (str = '') => {
  const output = {}
  for (let word of str) {
    if (!output[word]) output[word] = 1
    else output[word] += 1
  }
  return output
}

console.log(
  checkMagazine(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
  )
) // Yes

console.log(
  checkMagazine(
    ['two', 'times', 'three', 'is', 'not', 'four'],
    ['two', 'times', 'two', 'is', 'four']
  )
) // No

console.log(
  checkMagazine(
    ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
    ['ive', 'got', 'some', 'coconuts']
  )
) // No
