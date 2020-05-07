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

// TODO: Fix the code to be executed within the time limits
const activityNotifications = (expenditures = [], d = 0) => {
	let nNotifications = 0
	for (let i = 0; i < expenditures.length; i++) {
		const trailingDays = expenditures.slice(i, i + d)
		const nextDayAfterTrailing = expenditures[i + d]
		if (trailingDays.length === d && nextDayAfterTrailing) {
			const median = getMedian(
				trailingDays.sort((a, b) => (a > b ? 1 : -1))
			)
			if (nextDayAfterTrailing >= 2 * median) nNotifications++
		}
	}
	return nNotifications
}

const getMedian = (arr = []) => {
	const middleIndex = Math.floor(arr.length / 2)
	if (arr.length % 2 === 0) {
		const firstN = arr[middleIndex - 1]
		const secondN = arr[middleIndex]
		return (firstN + secondN) / 2
	} else if (arr.length % 2 !== 0) {
		return arr[middleIndex]
	}
}

console.log(activityNotifications([ 2, 3, 4, 2, 3, 6, 8, 4, 5 ], 5)) // 2
console.log(activityNotifications([ 1, 2, 3, 4, 4 ], 4)) // 0
