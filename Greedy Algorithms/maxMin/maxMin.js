/**
 *
 * Author: Dmitriy Shin
 * Date: May 29, 2020
 * Program name: Max Min
 * 
 */
const fs = require('fs')

const maxMin = (k = 0, arr = []) => {
	const sorted = [ ...arr ].sort((a, b) => a - b)

	let minValue = Number.MAX_VALUE
	for (let i = 0; i < sorted.length - k + 1; i++)
		minValue = Math.min(minValue, sorted[k + i - 1] - sorted[i])

	return minValue
}

console.log(maxMin(3, [ 10, 100, 300, 200, 1000, 20, 30 ])) // 20
console.log(maxMin(4, [ 1, 2, 3, 4, 10, 20, 30, 40, 100, 200 ])) // 3
console.log(maxMin(2, [ 1, 2, 1, 2, 1 ])) // 0
console.log(maxMin(3, [ 100, 200, 300, 350, 400, 401, 402 ])) // 2

// fs.readFile('./bigtest.txt', 'utf-8', (error, data) => {
// 	if (error) throw new Error(error)
// 	const splitted = data.split('\n').map((n) => +n)
// 	console.log(maxMin(10000, splitted)) // 9665150
// })

// fs.readFile('./bigtest2.txt', 'utf-8', (error, data) => {
// 	if (error) throw new Error(error)
// 	const splitted = data.split('\n').map((n) => +n)
// 	console.log(maxMin(90000, splitted)) // 89733159
// })

// console.log(
// 	maxMin(5, [
// 		4504,
// 		1520,
// 		5857,
// 		4094,
// 		4157,
// 		3902,
// 		822,
// 		6643,
// 		2422,
// 		7288,
// 		8245,
// 		9948,
// 		2822,
// 		1784,
// 		7802,
// 		3142,
// 		9739,
// 		5629,
// 		5413,
// 		7232
// 	])
// ) // 1335
