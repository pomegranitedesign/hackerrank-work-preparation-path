/**
 *
 * Author: Dmitriy Shin
 * Date: April 28, 2020
 * Program name: Two Strings
 * Explanation:
 *  Given two strings, determine if they share a common substring.
 *  A substring may be as small as one character.
 *  For example, the words "a", "and", "art" share the common substring.
 *  The words "be" and "cat" do not share a substring.
 *
 */

const twoStrings = (s1 = '', s2 = '') => {
  return s1.split('').filter((char, index, self) => s2.match(char)).length
    ? 'YES'
    : 'NO'
}

console.log(twoStrings('hello', 'world')) // YES
console.log(twoStrings('hi', 'world')) // NO
