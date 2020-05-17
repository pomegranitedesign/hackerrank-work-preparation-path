/**
 *
 * Author: Dmitriy Shin
 * Date: May 17, 2020
 * Program name: Special String Again
 * Explanation:
 *  A string is said to be a special string if either of two conditions is met:
 *  - All of the characters are the same, e.g. aaa.
 *  - All characters except the middle one are the same, e.g. aadaa.
 *  A special substring is any substring of a string which meets one of those criteria. Given a string, 
 *  determine how many special substrings can be formed from it.
 *  
 *  For example, given the string s = mnonopoo, we have the following special substrings: 
 *    { m, n, o, n, p, o, o, non, ono, opo, oo }
 *  
 */

const substrCount = (s = '') => {
	return s
}

console.log(substrCount('asasd')) // 7
console.log(substrCount('abcbaba')) // 10
console.log(substrCount('aaaa')) // 10
