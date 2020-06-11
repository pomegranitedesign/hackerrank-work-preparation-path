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
	for (let i = 0; i < permutations.length; i++) {
		const permutation = permutations[i]
		let minDifference = getMinDifference(permutation)
	}

	return permutations
}

const getMinDifference = (arr = []) => {
	const length = arr.length
	for (let i = 0; i < arr.length; i++) {
		let middleIndex
		if (length % 2 === 0) {
			middleIndex = arr.length / 2
			const left = arr.slice(0, middleIndex)
			const right = arr.slice(middleIndex)
			console.log(left, right)
		} else {
		}
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
