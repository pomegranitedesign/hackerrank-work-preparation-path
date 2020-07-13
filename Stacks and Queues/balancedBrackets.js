/**
 *
 * Author: Dmitriy Shin
 * Date: July 13, 2020
 * Program name: Balanced Brackets
 *
 */

const isBalanced = (s = '') => {
	const openBrackets = {
		'{': '}',
		'[': ']',
		'(': ')'
	}

	const closeBrackets = {
		'}': '{',
		']': '[',
		')': '('
	}

	const stack = []
	for (let bracket of s) {
		const isOpeningBracket = bracket in openBrackets
		const isClosingBracket = bracket in closeBrackets
		if (isOpeningBracket) stack.push(bracket)
		if (isClosingBracket) {
			const poppedCharacter = stack.pop()
			if (poppedCharacter === closeBrackets[bracket]) continue
			else return 'NO'
		}
	}

	return stack.length ? 'NO' : 'YES'
}

console.log(isBalanced('{[()]}')) // -> YES
console.log(isBalanced('{[(])}')) // -> NO
console.log(isBalanced('{{[[(())]]}}')) // -> YES
console.log(isBalanced('{{)[](}}')) // -> NO
