const countInversions = (arr = []) => {
	let nSwaps = 0

	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
				nSwaps++
			}
		}
	}

	return nSwaps
}
