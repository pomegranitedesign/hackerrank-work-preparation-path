/**
 *
 * Author: Dmitriy Shin
 * Date: April 8, 2020
 * Program name: Repeated String
 * Simplified problem explanation:
 *  Create a function that will return the number of occurences of a letter a in a string
 *
 */

const repeatedString = (s = '', n = 0) => {
	const initialACount = getACount(s)
	const result = Math.floor(n / s.length) * initialACount
	const lengthLeft = n % s.length
	const stringLeft = s.substring(0, lengthLeft)
	const newACount = getACount(stringLeft) + result
	return newACount
}

const getACount = (str) =>
	[ ...str ].filter((char) => (char === 'a' ? char : '')).length

console.log(repeatedString('aba', 10)) // -> 7
console.log(repeatedString('a', 1000000000000)) // -> 1000000000000
console.log(repeatedString('ceebbcb', 817723)) // -> 0
console.log(repeatedString('gfcaaaecbg', 547602)) // -> 164280
console.log(
	repeatedString(
		'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',
		736778906400
	)
) // -> 51574523448
console.log(
	repeatedString(
		'epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq',
		549382313570
	)
) // 16481469408
