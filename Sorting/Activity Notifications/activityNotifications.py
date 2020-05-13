import bisect
import statistics

def activityNotifications(expenditure, d):
    arr = sorted(expenditure[0:d])
    m = d // 2
    c = 0
    for i in range(d, len(expenditure)):
      if expenditure[i] >= 2 * med(arr, d, m):
        c += 1
      del arr[bisect.bisect_left(arr, expenditure[i-d])]
      bisect.insort(arr, expenditure[i])
    return c