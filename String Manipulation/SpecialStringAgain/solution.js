const substrCount = (s = '') => {
	let result = 0
	for (let i = 0; i < s.length; i++) {
		result += countSpecialSubstrings(s, i)
	}
	return result
}

const countSpecialSubstrings = (s = '', i = 0) => {
	let count = 0
	let length = 0

	const start = i
	while (s[start] === s[i] && length < s.length) {
		count++
		i++
		length++
	}

	i++

	while (length > 0) {
		if (s[i] !== s[start] || i === s.length) return count
		length--
		i++
	}

	count++
	return count
}
