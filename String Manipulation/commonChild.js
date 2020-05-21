/**
 *
 * Author: Dmitriy Shin
 * Date: May 21, 2020
 * Program name: Common Child
 * Explanation:
 *  A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. 
 *  Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both?
 * 
 *  For example, ABCD and ABDC have two children with maximum length 3, ABC and ABD. 
 *  They can be formed by eliminating either the D or C from both strings. 
 *  Note that we will not consider ABCD as a common child because we can't rearrange characters and ABCD !== ABDC.
 *  
 */

// Both strings are equal length
// Return the length of the longest string that is the child of s1 and s2
const commonChild = (s1 = '', s2 = '') => {
	const o1 = {}
	const o2 = {}

	// SLICE until the first match is found
	let c1 = [ ...s1 ]
	let c2 = [ ...s2 ]

	let i = 0
	let matchFound = false
	while (!matchFound) {
		if (c1[i] === c2[i]) matchFound = true
		c1 = c1.slice(i)
		c2 = c2.slice(i)
		i++
	}

	console.log(c1, c2)

	for (let i = 0; i < s1.length; i++) {
		o1[s1[i]] = {}
		o2[s2[i]] = {}

		if (!o1[s1[i]].occured) {
			o1[s1[i]].occured = 1
			o1[s1[i]].index = i
		} else o1[s1[i]].occured++

		if (!o2[s2[i]].occured) {
			o2[s2[i]].occured = 1
			o2[s2[i]].index = i
		} else o2[s2[i]].occured++
	}

	// return [ o1, o2 ]
}

console.log(commonChild('HARRY', 'SALLY')) // 2
// console.log(commonChild('AA', 'BB')) // 0
console.log(commonChild('SHINCHAN', 'NOHARAAA')) // 3
// console.log(commonChild('ABCDEF', 'FBDAMN')) // 2
