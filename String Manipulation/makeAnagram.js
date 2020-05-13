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
	const sortedA = [ ...a ].sort()
	const sortedB = [ ...b ].sort()

	let c = 0
	if (sortedA.length < sortedB.length)
		while (sortedA.length !== sortedB.length) sortedA.push('')
	else if (sortedB.length < sortedA.length)
		while (sortedB.length !== sortedA.length) sortedB.push('')

	for (let i = 0; i < sortedA.length; i++) {
		if (sortedA[i] !== sortedB[i]) c++
		console.log(sortedA[i], sortedB[i])
	}

	return [
		sortedA.filter((char) => char !== ''),
		sortedB.filter((char) => char !== '')
	]
}

const isAnagram = (a = '', b = '') => a === b

console.log(makeAnagram('cde', 'abc')) // 4
console.log(makeAnagram('cde', 'dcf')) // 2
console.log(
	makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke') // 30
)
console.log(
	makeAnagram(
		'bugexikjevtubidpulaelsbcqlupwetzyzdvjphn',
		'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk'
	)
) // 40
