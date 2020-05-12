/**
 *
 * Author: Dmitriy Shin
 * Date: May 11, 2020
 * Program name: Merge Sort: Counting Inversions
 * Explanation:
 *  In an array, arr, the elements at indices i and j (where i < j) form an inversion if arr[i] > arr[j]. 
 *  In other words, inverted elements arr[i] and arr[j] are considered to be "out of order". 
 *  To correct an inversion, we can swap adjacent elements.
 *  For example, consider the dataset arr = [2, 4, 1]. It has two inversions: (4, 1) and (2, 1). 
 *  To sort the array, we must perform the following two swaps to correct the inversions:
 *    arr[i] = [2, 4, 1] -> swap(arr[1], arr[2]) -> swap(arr[0], arr[1]) -> [1, 2, 4] // 2
 *  Given d datasets, print the number of inversions that must be swapped to sort each dataset on a new line.
 * 
 */

const countInversions = (arr = []) => sortAndCount(arr).count

const sortAndCount = (arr = []) => {
	let left, right, mergeOut, leftSort, rightSort
	if (arr.length < 2) {
		return {
			count: 0,
			list: arr
		}
	}

	left = arr.slice(0, Math.floor(arr.length / 2))
	right = arr.slice(Math.floor(arr.length / 2), arr.length)

	leftSort = sortAndCount(left)
	rightSort = sortAndCount(right)
	mergeOut = mergeAndCount(leftSort.list, rightSort.list)

	return {
		count: leftSort.count + rightSort.count + mergeOut.count,
		list: mergeOut.list
	}
}

const mergeAndCount = (a = [], b = []) => {
	let count = 0
	let result = []

	while (a.length && b.length) {
		result.push(Math.min(a[0], b[0]))
		if (b[0] < a[0]) {
			count += a.length
			b.shift()
		} else a.shift()
	}

	result = a.length ? result.concat(a) : result.concat(b)

	return {
		count,
		list: result
	}
}

console.log(countInversions([ 1, 1, 1, 2, 2 ])) // 0
console.log(countInversions([ 2, 1, 3, 1, 2 ])) // 4
console.log(countInversions([ 2, 4, 1 ])) // 2
console.log(countInversions([ 1, 5, 3, 7 ])) // 1
console.log(countInversions([ 7, 5, 3, 1 ])) // 6
