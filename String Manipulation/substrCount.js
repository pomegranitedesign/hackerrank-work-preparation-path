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
	const subs = {}

	for (let i = 0; i < s.length; i++) {
		if (!subs[s[i]]) subs[s[i]] = 1
		else subs[s[i]]++
	}

	for (let i = 0; i < s.length - 1; i++) {
		for (let j = i + 1; j < s.length; j++) {
			const sub = s.slice(i, j + 1)
			if (allSame(sub) || allSameExceptMiddle(sub))
				if (!subs[sub]) subs[sub] = 1
				else subs[sub]++
		}
	}

	return Object.values(subs).reduce(sum, 0)
	// return subs
}

const sum = (a = 0, b = 0) => a + b

const allSame = (s = '') => /^(.)\1+$/.test(s)

const allSameExceptMiddle = (s = '') => {
	let middleIndex = Math.floor(s.length / 2)
	if (s.length % 2 === 0) {
		if (s.length === 2) return allSame(s)
		if (!allSame(s))
			return allSame(
				s.substring(0, middleIndex - 1) +
					s.substring(middleIndex + 1, s.length)
			)
	}

	return allSame(
		s.substring(0, middleIndex) + s.substring(middleIndex + 1, s.length)
	)
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

console.log(
	substrCount(
		'bacaacaaaabbbcaccabaacbbaacbcccbbbbacbaabcabcbaaccbcbbbcbcbbbbacbaccaacaaababbcaaaacbbcbbaabaaababaacaaccbbbaabcabccacbacbacccababbccbabbccbbbccbcabaabcaacbcabaacbcbababcacbbaaaaccbabaaabbbcbbacccacabcbacbbbcbcbacbacbaabcababcbcccbcbcacccabbbbcbaabcbaabbbcbbbacbccbcbcbbbbcccbcacaccacbaabbacacabcaacacbacabcabcbbbbcbaaacbabbccacacaabacabacaacbccbaaaabccccababbcbaabcccaababaccccbbcabbbaaaacabbacccacacbcabbbcbcbbcbabbaccccccbbaaabbbacbabacbbcaabbabacbbccccbacbccbbaabbccabaacabcabbabaaacccccaaabcbabbbccaccacccbaabcbabccbbcbabbcbcbbbccbcbcbbaabbabcaacbbcacccccacbbbcbbbcbbababaabbcaabbcccbacbabaaacbaacaaacbccaaabbaaaaaccccacbaabcbcbaacccbcccbcaacabbbabccaaabaaacacacaabccacaacbacbabbcabbbaccbabaaabccaacccaabcccbbcbacbccbbccacabbbabaababaacbaacbbbbaaabbabcabbacacabbabacaaacbcbacacccbacbbbabaabcacccbcabaaaccaaaacbaaabbcbbabcabccaaaaaabbbabacbcbcbaacacbccacbbbcbbbaaacccaaabbcaacbbbcbaaabbcbcbbabbbccbccacbbababcaccbbbabccccccbacacbbcbbabcbccacbaaccccbcaaaabccccabacbccbcbbcbcaacccabbbacabccbbacacbcbbcbbcbacbbcbbccc'
	)
) // 1583085
