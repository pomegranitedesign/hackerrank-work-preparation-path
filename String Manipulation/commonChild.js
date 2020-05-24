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
	const c1 = [ ...s1 ]
	const c2 = [ ...s2 ]

	let nCommon = 0
	for (let i = 0; i < c1.length; i++) {
		for (let j = 0; j < c2.length; j++) {
			if ((c1[i] === c2[j]) & (c1[i] !== '_') && c2[j] !== '_') {
				console.log(c1[i], c2[j], i, j, `i - j = ${Math.abs(i - j)}`)
				c1[i] = '_'
				c2[i] = '_'
				nCommon++
			}
		}
	}

	return nCommon
}

// 0 1 2 3 4 5
// A B C D E F

// 0 1 2 3 4 5
// F B D A M N

console.log(commonChild('HARRY', 'SALLY')) // 2
console.log(commonChild('AA', 'BB')) // 0
console.log(commonChild('SHINCHAN', 'NOHARAAA')) // 3
console.log(commonChild('ABCDEF', 'FBDAMN')) // 2
console.log(
	commonChild(
		'WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS',
		'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'
	)
) // 15
