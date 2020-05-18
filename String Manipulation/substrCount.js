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

const substrCount = (s = '') => {
	const o = {}

	// Get single characters
	for (let i = 0; i < s.length; i++)
		if (!o[s[i]]) o[s[i]] = 1
		else o[s[i]]++

	// Get substrings
	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j < s.length; j++) {
			const sub = s.substr(i, j + 1)
			if (sub !== '' && sub.length > 1) {
				if (!o[sub]) o[sub] = 1
				else o[sub]++
			}
		}
	}

	for (let oc in o) {
		if (oc.length > 1) {
			if (!allSameExceptMiddle(oc)) o[oc] = 0
		}
	}

	return Object.values(o).reduce((a, b) => a + b, 0)
	// return o
}

const allSame = (s = '') => (s.match(/^(.)\1+$/) ? true : false)

const allSameExceptMiddle = (s = '') => {
	const isEvenLength = s.length % 2 === 0
	if (isEvenLength && allSame(s)) return true
	else if (!isEvenLength) {
		const middleIndex = Math.floor(s.length / 2)
		const splitted = [ ...s ]
		splitted.splice(middleIndex, 1)
		return allSame(splitted.join(''))
	}
}

console.log(substrCount('asasd')) // 7
console.log(substrCount('abcbaba')) // 10
console.log(substrCount('aaaa')) // 10
console.log(substrCount('mnonopoo')) // 12
console.log(
	substrCount(
		'ccacacabccacabaaaabbcbccbabcbbcaccabaababcbcacabcabacbbbccccabcbcabbaaaaabacbcbbbcababaabcbbaaababababbabcaabcaacacbbaccbbabbcbbcbacbacabaaaaccacbaabccabbacabaabaaaabbccbaaaabacabcacbbabbacbcbccbbbaaabaaacaabacccaacbcccaacbbcaabcbbccbccacbbcbcaaabbaababacccbacacbcbcbbccaacbbacbcbaaaacaccbcaaacbbcbbabaaacbaccaccbbabbcccbcbcbcbcabbccbacccbacabcaacbcaccabbacbbccccaabbacccaacbbbacbccbcaaaaaabaacaaabccbbcccaacbacbccaaacaacaaaacbbaaccacbcbaaaccaabcbccacaaccccacaacbcacccbcababcabacaabbcacccbacbbaaaccabbabaaccabbcbbcaabbcabaacabacbcabbaaabccabcacbcbabcbccbabcabbbcbacaaacaabbbabbaacbbacaccccabbabcbcabababbcbaaacbaacbacacbabbcacccbccbbbcbcabcabbbcaabbaccccabaabbcbcccabaacccccaaacbbbcbcacacbabaccccbcbabacaaaabcccaaccacbcbbcccaacccbbcaaaccccaabacabcabbccaababbcabccbcaccccbaaabbbcbabaccacaabcabcbacaccbaccbbaabccbbbccaccabccbabbbccbaabcaabcabcbbabccbaaccabaacbbaaaabcbcabaacacbcaabbaaabaaccacbaacababcbacbaacacccacaacbacbbaacbcbbbabccbababcbcccbccbcacccbababbcacaaaaacbabcabcacaccabaabcaaaacacbccccaaccbcbccaccacbcaaaba'
	)
) // 1272919
