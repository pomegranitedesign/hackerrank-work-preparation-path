/**
 *
 * Author: Dmitriy Shin
 * Date: April 28, 2020
 * Program name: Sherlock and Anagrams
 * Explanation:
 *   Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string.
 *   Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
 *
 */

const sherlockAndAnagrams = (s = '') => {
	const substrings = []
	for (let stringLength = 0; stringLength < s.length; stringLength++)
		for (let k = 0; k <= s.length - stringLength; k++) {
			substrings[stringLength] = substrings[stringLength] || []
			if (s.slice(k, k + stringLength) !== '') substrings[stringLength].push(s.slice(k, k + stringLength))
		}

	let totalAnagrams = 0
	substrings.forEach((strings) => {
		for (let i = 0; i < strings.length; i++) {
			for (let k = i + 1; k < strings.length; k++) if (checkAnagram(strings[i], strings[k])) totalAnagrams++
		}
	})
	return totalAnagrams
}

const checkAnagram = (a = '', b = '') => {
	const letters = {}
	for (let i = 0; i < a.length; i++) letters[a[i]] = (letters[a[i]] || 0) + 1
	for (let i = 0; i < b.length; i++) {
		letters[b[i]] = (letters[b[i]] || 0) - 1

		if (letters[b[i]] < 0) return false
	}
	return true
}

// console.log(sherlockAndAnagrams('mom')) // 2
console.log(sherlockAndAnagrams('abba')) // 4
console.log(sherlockAndAnagrams('abcd')) // 0
console.log(sherlockAndAnagrams('kkkk')) // 10
// console.log(sherlockAndAnagrams('ifailuhkqq')) // 3
