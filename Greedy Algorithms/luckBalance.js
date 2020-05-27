/**
 *
 * Author: Dmitriy Shin
 * Date: May 27, 2020
 * Program name: Luck Balance
 * 
 */

const luckBalance = (k = 0, contests = [ [] ]) => {
	let output = 0

	let sorted = contests.sort((a, b) => (a[0] > b[0] ? -1 : 1))
	for (let i = 0; i < sorted.length; i++) {
		const [ L, T ] = sorted[i]
		if (T === 1) {
			if (k > 0) {
				output += L
				k--
				sorted[i] = null
			}
		}

		if (T === 0) {
			output += L
			sorted[i] = null
		}
	}

	sorted = sorted.filter((v) => v !== null)

	if (sorted.length)
		for (let i = 0; i < sorted.length; i++) output -= sorted[i][0]

	return output
}

console.log(luckBalance(2, [ [ 5, 1 ], [ 1, 1 ], [ 4, 0 ] ])) // 10

console.log(luckBalance(1, [ [ 5, 1 ], [ 1, 1 ], [ 4, 0 ] ])) // 8

console.log(
	luckBalance(3, [
		[ 5, 1 ],
		[ 2, 1 ],
		[ 1, 1 ],
		[ 8, 1 ],
		[ 10, 0 ],
		[ 5, 0 ]
	])
) // 29
