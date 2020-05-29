/**
 *
 * Author: Dmitriy Shin
 * Date: May 28, 2020
 * Program name: Greedy Florist
 * 
 */
const fs = require('fs')

const getMinimumCost = (c = [], k = 0) => {
	const sorted = [ ...c ].sort((a, b) => (a > b ? 1 : -1)).reverse()
	console.log(sorted)

	let prevPurchase = -1
	let minimumCost = 0

	for (let i = 0; i < sorted.length; i++) {
		if (i % k === 0) {
			prevPurchase++
			console.log(i, k, sorted[i])
		}
		minimumCost += sorted[i] * (prevPurchase + 1)
		console.log(minimumCost, prevPurchase)
	}

	return minimumCost
}

console.log(getMinimumCost([ 2, 5, 6 ], 3)) // 13
console.log(getMinimumCost([ 2, 5, 6 ], 2)) // 15
console.log(getMinimumCost([ 1, 3, 5, 7, 9 ], 3)) // 29

fs.readFile('./bigtest1.txt', 'utf-8', (error, data) => {
	if (error) throw new Error(error)
	const v = data.split(' ').map((n) => +n)
	console.log(getMinimumCost(v, 3)) // 163578911
})
