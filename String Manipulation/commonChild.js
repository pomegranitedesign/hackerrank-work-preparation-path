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

const commonChild = (s1 = '', s2 = '') => {
	const result = []
	for (let i = 0; i <= s1.length; i++) {
		result.push([])
		for (let j = 0; j <= s2.length; j++) {
			if (i === 0 || j === 0) result[i].push(0)
			else if (s1[i - 1] === s2[j - 1])
				result[i].push(1 + result[i - 1][j - 1])
			else result[i].push(Math.max(result[i - 1][j], result[i][j - 1]))
		}
	}
	console.log(result)
	return result[s1.length][s2.length]
}

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
