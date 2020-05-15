/**
 *
 * Author: Dmitriy Shin
 * Date: May 15, 2020
 * Program name: Sherlock and Valid String
 * Explanation:
 *  Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
 *  It is also valid if he can remove just 1 character at 1 index in the string, 
 *  and the remaining characters will occur the same number of times. Given a string s, 
 *  determine if it is valid. If so, return YES, otherwise return NO.
 *  For example, if s = abc, it is a valid string because frequencies are {a: 1, b: 1, c: 1}. 
 *  So is s = abcc because we can remove one  and have 1 of each character in the remaining string.
 *  If s = abccc however, the string is not valid as we can only remove 1 occurrence of c. 
 *  That would leave character frequencies of { a: 1, b: 1, c: 2 }.
 *  
 */

const isValid = (s = '') => {}

console.log(isValid('aabbcd')) // NO
console.log(isValid('aabbccddeefghi')) // NO
console.log(isValid('abcdefghhgfedecba')) // YES
