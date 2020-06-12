/**
 *
 * Author: Dmitriy Shin
 * Date: June 11, 2020
 * Program name: Find Permutations
 *
 */

const solve = (n, k) => {
	const arr = []
	for (let i = 1; i <= n; i++) arr.push(i)

	const permutations = getPermutations(arr)
	let maxMinDifference = -1
	for (let i = 0; i < permutations.length; i++) {
		const permutation = permutations[i]
		let minDifference = getMinDifference(permutation)
		if (minDifference > maxMinDifference) maxMinDifference = minDifference
	}

	for (let permutation of permutations) {
		const diff = Math.abs(permutation[0] - permutation[1])
		if (diff === maxMinDifference) {
			console.log(permutation)
		}
	}

	// return permutations
}

const getMinDifference = (arr = []) => {
	const length = arr.length
	for (let i = 0; i < arr.length; i++) {
		let middleIndex = arr.length / 2,
			minDifference,
			left,
			right
		if (length % 2 === 0) {
			left = arr.slice(0, middleIndex)
			right = arr.slice(middleIndex)
			minDifference = Math.min(
				Math.abs(left[0] - left[1]),
				Math.abs(right[0] - right[1])
			)
		} else {
			left = arr.slice(0, middleIndex + 1)
			right = arr.slice(middleIndex)
			minDifference = Math.min(
				Math.abs(left[0] - left[1]),
				Math.abs(right[0] - right[1])
			)
		}
		return minDifference
	}
}

const getPermutations = (arr) => {
	const result = []
	const permutate = (arr = [], memo = []) => {
		if (arr.length === 0) result.push(memo)
		for (let i = 0; i < arr.length; i++) {
			const current = arr.slice()
			const next = current.splice(i, 1)
			permutate(current.slice(), memo.concat(next))
		}
	}

	permutate(arr)
	return result
}

// console.log(solve(3, 5))
console.log(solve(4, 2))
