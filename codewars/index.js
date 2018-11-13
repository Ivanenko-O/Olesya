// var strarr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]
var strarr = ["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"]


function longestConsec(strarr, k) {
	const n = strarr.length
	if (n === 0 || k > n || k <= 0) return ""

	let strLen = []
	let indexMaxEl = 0
	let neighbor = 0

	strarr.forEach((el) => {
		strLen.push(el.length)
	})

	indexMaxEl = strLen.indexOf(Math.max(...strLen))

	neighbor = strarr[indexMaxEl - 1].length > strarr[indexMaxEl + 1] ? strarr[indexMaxEl - 1] : strarr[indexMaxEl + 1]

	return strarr[indexMaxEl] + neighbor

}

console.log(longestConsec(strarr, 2))


