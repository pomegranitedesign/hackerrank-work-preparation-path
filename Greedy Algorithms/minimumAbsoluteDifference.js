/**
 *
 * Author: Dmitriy Shin
 * Date: May 25, 2020
 * Program name: Minimum Absolute Difference in an Array
 * 
 */
const fs = require('fs')

const minimumAbsoluteDifference = (arr = []) => {
	const sorted = arr.sort((a, b) => (a > b ? 1 : -1))
	// .map((n) => Math.abs(n))
	let currentSmallestDifference = Math.abs(sorted.reduce((a, b) => a - b, 0))
	for (let i = 0; i < sorted.length - 1; i++) {
		for (let j = i + 1; j < sorted.length; j++) {
			const difference = Math.abs(sorted[i] - sorted[j])
			if (difference < currentSmallestDifference)
				currentSmallestDifference = difference
		}
	}
	return currentSmallestDifference
}

console.log(minimumAbsoluteDifference([ 3, -7, 0 ])) // 3

console.log(
	minimumAbsoluteDifference([ -59, -36, -13, 1, -53, -92, -2, -96, -54, 75 ])
) // 1

console.log(minimumAbsoluteDifference([ 1, -3, 71, 68, 17 ])) // 3

fs.readFile('./bigTest1.txt', 'utf-8', (err, data) => {
	if (err) throw new Error(error)

	const numbers = data.split(' ').map((c) => +c)
	console.log(minimumAbsoluteDifference(numbers)) // 0
})

fs.readFile('./bigTest2.txt', 'utf-8', (err, data) => {
	if (err) throw new Error(error)

	const numbers = data.split(' ').map((c) => +c)
	console.log(minimumAbsoluteDifference(numbers)) // 0
})
