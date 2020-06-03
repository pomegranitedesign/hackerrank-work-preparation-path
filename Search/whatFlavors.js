/**
 *
 * Author: Dmitriy Shin
 * Date: June 2, 2020
 * Program name: Hash Tables: Ice Cream Parlor
 * 
 */

// TODO Work on the performance
const whatFlavors = (cost = [], money = 0) => {
	const sorted = [ ...cost ].sort((a, b) => a - b)

	const largestIndex = sorted.findIndex((n) => n >= money)
	const sliced = sorted.slice(0, largestIndex)

	const output = []
	for (let i = 0; i < sliced.length; i++) {
		for (let j = i + 1; j < sliced.length; j++) {
			if (sliced[i] + sliced[j] === money) {
				const firstIndex = cost.findIndex((n) => n === sliced[i])
				const secondIndex = cost.findIndex(
					(n, index) => n === sliced[j] && index !== firstIndex
				)

				output.push(firstIndex + 1)
				output.push(secondIndex + 1)
			}
		}
	}

	return output
}

console.log(whatFlavors([ 2, 1, 3, 5, 6 ], 5)) // [1, 3]
console.log(whatFlavors([ 1, 4, 5, 3, 2 ], 4)) // [1, 4]
console.log(whatFlavors([ 2, 2, 4, 3 ], 4)) // [1, 2]
