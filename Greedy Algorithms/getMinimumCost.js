/**
 *
 * Author: Dmitriy Shin
 * Date: May 28, 2020
 * Program name: Greedy Florist
 * 
 */
const fs = require('fs')

const getMinimumCost = (c = [], k = 0) => {
	const reversed = [ ...c ].reverse()

	let total = reversed.slice(0, k).reduce((a, b) => a + b, 0)
	const left = reversed.slice(k)

	if (left.length) {
		for (let i = 0; i < left.length; i++) {
			total += (1 + 1) * left[i]
		}
	}

	return total
}

console.log(getMinimumCost([ 2, 5, 6 ], 3)) // 13
console.log(getMinimumCost([ 2, 5, 6 ], 2)) // 15
console.log(getMinimumCost([ 1, 3, 5, 7, 9 ], 3)) // 29

fs.readFile('./bigtest1.txt', 'utf-8', (error, data) => {
	if (error) throw new Error(error)

	const v = data.split(' ').map((n) => +n)
	console.log(getMinimumCost(v, 3)) // 163578911
})
