/**
 *
 * Author: Dmitriy Shin
 * Date: July 29, 2020
 * 
 */
function traverse(indexes) {
	const result = []
	function traverseRec(current, depth) {
		if (current < 0) return
		traverseRec(indexes[current - 1][0], depth + 1)
		result.push(current)
		traverseRec(indexes[current - 1][1], depth + 1)
	}
	traverseRec(1, 1)
	return result
}

function swapOperation(indexes, k) {
	function swapOperationRec(current, depth) {
		if (current < 0) return
		if (depth % k === 0) {
			const [ left, right ] = indexes[current - 1]
			indexes[current - 1] = [ right, left ]
		}
		swapOperationRec(indexes[current - 1][0], depth + 1)
		swapOperationRec(indexes[current - 1][1], depth + 1)
	}
	swapOperationRec(1, 1)
}

function swapNodes(indexes, queries) {
	const result = []
	queries.forEach((k) => {
		swapOperation(indexes, k)
		result.push(traverse(indexes))
	})
	return result
}
