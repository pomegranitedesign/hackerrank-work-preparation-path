const activityNotifications = (arr = [], d = 0) => {
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
