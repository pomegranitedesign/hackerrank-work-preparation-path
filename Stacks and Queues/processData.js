/**
 *
 * Author: Dmitriy Shin
 * Date: July 14, 2020
 * Program name: Queues: A Tale of Two Stacks
 *
 */
const fs = require('fs')

const processData = (input = '') => {
	const splitted = input.split('\n')
	const n = splitted[0]
	splitted.unshift()
	console.log(splitted)

	const fifo = []
	const lifo = []
	for (let query of splitted) {
		const isFirstQuery = query.length > 1
		if (isFirstQuery) {
			const [ _, value ] = query.split(' ')
			const numericValue = +value
			lifo.push(numericValue)
			fifo.unshift(numericValue)
		} else
			switch (+query) {
				case 2:
					fifo.pop()
					lifo.shift()
					break
				case 3:
					console.log(fifo[fifo.length - 1], lifo[0])
					break
			}
	}
}

// console.log(processData('10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2'))
fs.readFile('./processData-data1.txt', 'utf-8', (err, data) => {
	if (err) throw new Error(err.message)
	console.log(processData(data))
})
