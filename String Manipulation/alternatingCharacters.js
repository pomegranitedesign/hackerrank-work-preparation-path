/**
 *
 * Author: Dmitriy Shin
 * Date: May 14, 2020
 * Program name: Alternating Characters
 * Explanation:
 *  You are given a string containing characters A and B only. 
 *  Your task is to change it into a string such that there are no matching adjacent characters. 
 *  To do this, you are allowed to delete zero or more characters in the string.
 *  Your task is to find the minimum number of required deletions.
 *  For example, given the string s = AABAAB,
 *  remove an A at positions 0 and 3 to make s = ABAB in 2 deletions. 
 *  
 */

const alternatingCharacters = (s = '') => {
	let nRemoved = 0
	let i = 0

	const splitted = [ ...s ]
	let currentCharacter = splitted[i]
	for (i = 1; i < splitted.length; i++)
		if (splitted[i] === currentCharacter) nRemoved++
		else currentCharacter = splitted[i]

	return nRemoved
}

console.log(alternatingCharacters('AABAAB')) // 2
console.log(alternatingCharacters('AAAA')) // 3
console.log(alternatingCharacters('BBBBB')) // 4
console.log(alternatingCharacters('ABABABAB')) // 0
console.log(alternatingCharacters('BABABA')) // 0
console.log(alternatingCharacters('AAABBB')) // 4
