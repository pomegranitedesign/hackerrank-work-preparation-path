/**
 *
 * Author: Dmitriy Shin
 * Date: May 4, 2020
 * Program name: Count Triplets
 * Explanation:
 *  You are given an array and you need to find the number of triplets of indices (i, j, k) 
 *  such that the elements at those indices are in geometric progression for a given common ratio r
 *  and  i < j < k
 *
 */

// The function must return the number of triplets
// that form a geometric progression given a common ratio
const countTriplets = (arr = [], r = 0) => {
	// First approach with O(n^3)
	// for (let i = 0; i < arr.length - 2; i++)
	// 	for (let j = i + 1; j < arr.length - 1; j++)
	// 		for (let k = j + 1; k < arr.length; k++)
	// 			if (arr[k] / arr[j] === r && arr[j] / arr[i] === r) nTriplets++

	// Second approach with O(n)
	let nTriplets = 0

	const possibilities = {}
	const combos = {}

	arr.forEach((number) => {
		nTriplets += combos[number] || 0
		const nextNumber = number * r
		combos[nextNumber] =
			(combos[nextNumber] || 0) + (possibilities[number] || 0)
		possibilities[nextNumber] = (possibilities[nextNumber] || 0) + 1
	})

	return nTriplets
}

console.log(countTriplets([ 1, 4, 16, 64 ], 4)) // 2
console.log(countTriplets([ 1, 2, 2, 4 ], 2)) // 2
console.log(countTriplets([ 1, 3, 9, 9, 27, 81 ], 3)) // 6
console.log(countTriplets([ 1, 5, 5, 25, 125 ], 5)) // 4
console.log(
	countTriplets(
		[
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		1
	)
)
