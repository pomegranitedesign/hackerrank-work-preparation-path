/**
 *
 * Author: Dmitriy Shin
 * Date: May 15, 2020
 * Program name: Sherlock and Valid String
 * Explanation:
 *  Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
 *  It is also valid if he can remove just 1 character at 1 index in the string, 
 *  and the remaining characters will occur the same number of times. Given a string s, 
 *  determine if it is valid. If so, return YES, otherwise return NO.
 *  For example, if s = abc, it is a valid string because frequencies are {a: 1, b: 1, c: 1}. 
 *  So is s = abcc because we can remove one c and have 1 of each character in the remaining string.
 *  If s = abccc however, the string is not valid as we can only remove 1 occurrence of c. 
 *  That would leave character frequencies of { a: 1, b: 1, c: 2 }.
 *  
 */

const isValid = (s = '') => {
	const occurences = {}
	for (let i = 0; i < s.length; i++) {
		if (!occurences[s[i]]) {
			occurences[s[i]] = {}
			occurences[s[i]].occured = 1
			occurences[s[i]].removed = 0
		} else occurences[s[i]].occured += 1
	}

	const flattened = flatten(occurences, 'occured')
	const mode = Math.max(...getMode(flattened))
	for (let occurence in occurences) {
		if (occurences[occurence].occured > mode) {
			while (occurences[occurence].occured !== mode) {
				occurences[occurence].occured--
				occurences[occurence].removed++
			}
		}

		if (occurences[occurence].occured < mode) {
			while (occurences[occurence].occured !== mode) {
				occurences[occurence].occured++
				occurences[occurence].removed++
			}
		}
	}

	const anyRemovedMoreThan2 =
		flatten(occurences, 'removed').reduce(sum, 0) >= 2
	return anyRemovedMoreThan2 ? 'NO' : 'YES'
}

const sum = (a, b) => a + b

const flatten = (obj = {}, key = '') =>
	Object.entries(Object.values(obj)).map((val) => val[1][key])

const getMode = (numbers) => {
	// as result can be bimodal or multi-modal,
	// the returned result is provided as an array
	// mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
	let modes = [],
		count = [],
		i,
		number,
		maxIndex = 0

	for (i = 0; i < numbers.length; i += 1) {
		number = numbers[i]
		count[number] = (count[number] || 0) + 1
		if (count[number] > maxIndex) {
			maxIndex = count[number]
		}
	}

	for (i in count)
		if (count.hasOwnProperty(i)) {
			if (count[i] === maxIndex) {
				modes.push(Number(i))
			}
		}

	return modes
}

// console.log(isValid('aabbcd')) // NO
// console.log(isValid('aabbccddeefghi')) // NO
// console.log(isValid('abcdefghhgfedecba')) // YES
// console.log(isValid('aaaabbcc')) // NO
// console.log(isValid('aaaaabc')) // NO
console.log(
	isValid(
		'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'
	)
) // YES
