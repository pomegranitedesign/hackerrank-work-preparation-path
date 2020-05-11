const countInversions = () => {
	const binaries = []

	for (let i = 0; i < arr.length - 1; i++)
		for (let j = i + 1; j < arr.length; j++)
			if (arr[i] > arr[j]) binaries.push(1)

	return binaries.length
}
