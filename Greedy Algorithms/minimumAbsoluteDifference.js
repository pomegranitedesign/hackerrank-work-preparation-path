/**
 *
 * Author: Dmitriy Shin
 * Date: May 25, 2020
 * Program name: Minimum Absolute Difference in an Array
 * 
 */
const minimumAbsoluteDifference = (arr = []) => {
	const pairs = findPairs(arr)
	const diffs = []
	for (let pair of pairs) diffs.push(Math.abs(pair[0] - pair[1]))
	return Math.min(...diffs)
}

const findPairs = (arr = []) => {
	const result = []
	const length = arr.length
	for (let i = 0; i < length; i++)
		for (let j = i + 1; j < length; j++) result.push([ arr[i], arr[j] ])
	return result
}

console.log(minimumAbsoluteDifference([ 3, -7, 0 ])) // 1

console.log(
	minimumAbsoluteDifference([ -59, -36, -13, 1, -53, -92, -2, -96, -54, 75 ])
) // 3

console.log(minimumAbsoluteDifference([ 1, -3, 71, 68, 17 ])) // 3
