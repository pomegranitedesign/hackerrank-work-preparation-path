/**
 *
 * Author: Dmitriy Shin
 * Date: May 6, 2020
 * Program name: Bubble Sort
 * Explanation:
 *  Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:
 *  Array is sorted in numSwaps swaps., where numSwaps is the number of swaps that took place.
 *  First Element: firstElement, where firstElement is the first element in the sorted array.
 *  Last Element: lastElement, where lastElement is the last element in the sorted array. 
 */

const countSwaps = (arr = []) => {
	let nSwaps = 0

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
				nSwaps++
			}
		}
	}

	console.log(`Array is sorted in ${nSwaps} swaps.`)
	console.log(`First Element: ${arr[0]}`)
	console.log(`Last Element: ${arr[arr.length - 1]}`)

	return nSwaps
}

console.log(countSwaps([ 6, 4, 1 ]))
// Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 6

console.log(countSwaps([ 1, 2, 3 ]))
// Array is sorted in 0 swaps.
// First Element: 1
// Last Element: 3

console.log(countSwaps([ 3, 2, 1 ]))
// Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 3
