/**
 *
 * Author: Dmitriy Shin
 * Date: April 7, 2020
 * Program name: Sock Merchant
 * Simplified problem explanation: Find all pairs and return their count
 *
 */

const sockMerchant = (n, array = []) => {
  // Count number of all available pairs in the array
  const pairs = []
  for (let index = 0; index < array.length; index++) {
    for (
      let helperIndex = index + 1;
      helperIndex < array.length;
      helperIndex++
    ) {
      if (array[index] === array[helperIndex]) {
        pairs.push([array[index], array[helperIndex]])
        array[index] = undefined
        array[helperIndex] = undefined
      }
    }
  }
  return pairs
    .map((pair) => pair.filter((number) => number !== undefined))
    .filter((pair) => pair.length > 0).length
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // -> 3
