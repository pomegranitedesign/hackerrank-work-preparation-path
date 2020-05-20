/**
 *
 * Author: Dmitriy Shin
 * Date: May 17, 2020
 * Program name: Special String Again
 * Explanation:
 *  A string is said to be a special string if either of two conditions is met:
 *  	- All of the characters are the same, e.g. aaa.
 *  	- All characters except the middle one are the same, e.g. aadaa.
 * 
 *  A special substring is any substring of a string which meets one of those criteria. 
 * 	Given a string, determine how many special substrings can be formed from it.
 *  
 *  For example, given the string s = mnonopoo, we have the following special substrings: 
 *    { m, n, o, n, p, o, o, non, ono, opo, oo }
 *  
 */

debugger
const substrCount = (s = '') => {
	let result = s.length

	for (let i = 0; i < s.length; i++) result += countSpecials(s, i)

	return result
}

const countSpecials = (s = '', i = 0) => {
	let result = 0

	let j = i + 1
	while (s[i] === s[j]) {
		if (s[i] === s[j] && s[i] !== s[j + 1] && s[i] === s[j + 2]) result++
		result++
		j++
	}

	return result
}

console.log(substrCount('asasd')) // 7
// console.log(substrCount('abcbaba')) // 10
// console.log(substrCount('aaaa')) // 10
// console.log(substrCount('mnonopoo')) // 12
