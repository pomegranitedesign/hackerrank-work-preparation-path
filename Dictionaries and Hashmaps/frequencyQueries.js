/**
 *
 * Author: Dmitriy Shin
 * Date: May 5, 2020
 * Program name: Frequency Queries
 * Explanation:
 *  You are given q queries. Each query is of the form two integers described below:
 *  - 1 x: Insert x in your data structure.
 *  - 2 y: Delete one occurence of y from your data structure, if present.
 *  - 3 z: Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0
 *  The queries are given in the form of a 2-D array queries of size q where queries[i][0] 
 *  contains the operation, and queries[i][1] contains the data element. 
 *  
 */

const freqQuery = (queries = [ [] ]) => {
	const output = []
	const frequencies = {}
	const counts = {}

	for (let i = 0; i < queries.length; i++) {
		const operation = queries[i][0]
		const dataElement = queries[i][1]

		switch (operation) {
			case 1:
				frequencies[dataElement] = frequencies[dataElement] || 0

				if (frequencies[dataElement] > 0)
					counts[frequencies[dataElement]] -= 1

				frequencies[dataElement] += 1
				counts[frequencies[dataElement]] =
					(counts[frequencies[dataElement]] || 0) + 1
				break

			case 2:
				if (frequencies[dataElement] > 0) {
					counts[frequencies[dataElement]] -= 1
					frequencies[dataElement] -= 1
					counts[frequencies[dataElement]] =
						(counts[frequencies[dataElement]] || 0) + 1
				}
				break

			case 3:
				if (counts[dataElement] > 0) output.push(1)
				else output.push(0)
				break
		}
	}

	return output
}

console.log(
	freqQuery([
		[ 1, 5 ],
		[ 1, 6 ],
		[ 3, 2 ],
		[ 1, 10 ],
		[ 1, 10 ],
		[ 1, 6 ],
		[ 2, 5 ],
		[ 3, 2 ]
	])
) // [0, 1]

console.log(freqQuery([ [ 3, 4 ], [ 2, 1003 ], [ 1, 16 ], [ 3, 1 ] ])) // [0, 1]

console.log(
	freqQuery([
		[ 1, 3 ],
		[ 2, 3 ],
		[ 3, 2 ],
		[ 1, 4 ],
		[ 1, 5 ],
		[ 1, 5 ],
		[ 1, 4 ],
		[ 3, 2 ],
		[ 2, 4 ],
		[ 3, 2 ]
	])
) // [0, 1, 1]
