/**
 *
 * Author: Dmitriy Shin
 * Date: June 16, 2020
 * Program name: Triple Sum
 * 
 */
const fs = require('fs')

// OLD SOLUTION
// let nTriplets = 0

// const output = []
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     for (let k = 0; k < c.length; k++) {
//       const p = a[i],
//         q = b[j],
//         r = c[k]

//       const triplet = [ p, q, r ]
//       if (p <= q && q >= r) output.push(triplet.join(''))
//     }
//   }
// }

// return output.filter(
//   (triplet, index, self) => self.indexOf(triplet) === index
// ).length

const triplets = (a = [], b = [], c = []) => {
	const aSorted = [ ...a ]
		.sort((a, b) => a - b)
		.filter((n, i, a) => a.indexOf(n) === i)
	const bSorted = [ ...b ]
		.sort((a, b) => a - b)
		.filter((n, i, a) => a.indexOf(n) === i)
	const cSorted = [ ...c ]
		.sort((a, b) => a - b)
		.filter((n, i, a) => a.indexOf(n) === i)

	let nTriplets = 0
	let i = 0,
		j = 0,
		k = 0

	while (i < bSorted.length) {
		while (aSorted[j] <= bSorted[i] && j < aSorted.length) j++
		while (cSorted[k] <= bSorted[i] && k < cSorted.length) k++
		i++
		nTriplets += j * k
	}

	return nTriplets
}

console.log(triplets([ 3, 5, 7 ], [ 3, 6 ], [ 4, 6, 9 ])) // 4
console.log(triplets([ 1, 3, 5 ], [ 2, 3 ], [ 1, 2, 3 ])) // 8
console.log(triplets([ 1, 4, 5 ], [ 2, 3, 3 ], [ 1, 2, 3 ])) // 5
console.log(triplets([ 1, 3, 5, 7 ], [ 5, 7, 9 ], [ 7, 9, 11, 13 ])) // 12
fs.readFile('./bigTest.txt', 'utf-8', (err, data) => {
	if (err) throw new Error(err)
	let [ a, b, c ] = data.split('\n')
	a = a.split(' ').map((n) => +n)
	b = b.split(' ').map((n) => +n)
	c = c.split(' ').map((n) => +n)
	console.log(triplets(a, b, c))
})
