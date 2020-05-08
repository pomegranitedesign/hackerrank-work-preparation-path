/**
 *
 * Author: Dmitriy Shin
 * Date: May76, 2020
 * Program name: Fraudulent Activity Notifications
 * Explanation:
 *  HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. 
 *  If the amount spent by a client on a particular day is greater than or equal to 2 * the client's median spending for a 
 *  trailing number of days, they send the client a notification about potential fraud. 
 *  The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data. 
 *  Given the number of trailing days d and a client's total daily expenditures for a period of n days, 
 *  find and print the number of times the client will receive a notification over all n days.
 *  
 */

const fs = require('fs')

const activityNotifications = (expenditures = [], d = 0) => {
	let nNotifications = 0

	const trailingDays = expenditures.slice(0, d)
	trailingDays.sort(compareN)

	for (let i = d; i < expenditures.length; i++) {
		const median = getMedian(trailingDays)
		if (median <= expenditures[i]) nNotifications++
		change(trailingDays, expenditures[i - d], expenditures[i])
	}
	return nNotifications
}

const compareN = (a, b) => a - b

const getMedian = (arr = []) => {
	if (arr.length % 2 === 1) return 2 * arr[(arr.length - 1) / 2]
	else return arr[arr.length / 2] + arr[arr.length / 2 - 1]
}

const change = (arr = [], from, to) => {
	if (from === to) return

	let i = arr.indexOf(from)
	if (to > from) {
		while (i < arr.length - 1 && arr[i + 1] < to) {
			arr[i] = arr[i + 1]
			i++
		}
		arr[i] = to
	}

	if (to < from) {
		while (i > 0 && arr[i - 1] > to) {
			arr[i] = arr[i - 1]
			i--
		}
		arr[i] = to
	}
}

console.log(activityNotifications([ 2, 3, 4, 2, 3, 6, 8, 4, 5 ], 5)) // 2
console.log(activityNotifications([ 1, 2, 3, 4, 4 ], 4)) // 0

fs.readFile('./bigTest1.txt', (err, data) => {
	if (err) console.error('There was an error reading file')
	const convertedData = data.toString().split(' ').map((n) => +n)
	console.log(activityNotifications(convertedData, 10000))
})
