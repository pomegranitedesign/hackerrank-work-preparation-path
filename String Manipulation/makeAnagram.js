/**
 *
 * Author: Dmitriy Shin
 * Date: May 13, 2020
 * Program name: Strings: Making Anagrams
 * Explanation:
 *  Given two strings, a and b, that may or may not be of the same length, 
 *  determine the minimum number of character deletions required to make a and b anagrams. 
 *  Any characters can be deleted from either of the strings.
 *  For example, if a = cde and b = dcf, we can delete e from string a and f from string b so that both remaining 
 *  strings are cd and dc which are anagrams.
 *  
 */

const makeAnagram = (a = '', b = '') => {
	const aOccurences = countOccurences(a)
	const bOccurences = countOccurences(b)

	const aCount = countCharsToRemove(aOccurences, bOccurences)
	const bCount = countCharsToRemove(bOccurences, aOccurences)

	return aCount + bCount
}

const countCharsToRemove = (a = {}, b = {}) => {
	let nRemoved = 0
	for (var k in a) {
		if (a.hasOwnProperty(k)) {
			if (a[k] && b[k]) {
				if (a[k] > b[k]) {
					nRemoved += a[k] - b[k]
					a[k] = b[k]
				}
			} else nRemoved += a[k]
		}
	}
	return nRemoved
}

const countOccurences = (str = '') => {
	const occurences = {}
	for (let i = 0; i < str.length; i++)
		occurences[str[i]] = (occurences[str[i]] || 0) + 1
	return occurences
}

console.log(makeAnagram('cde', 'abc')) // 4
console.log(makeAnagram('cde', 'dcf')) // 2
console.log(
	makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')
) // 30
// console.log(
// 	makeAnagram(
// 		'bugexikjevtubidpulaelsbcqlupwetzyzdvjphn',
// 		'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk'
// 	)
// ) // 40
