
// Given the triangle of consecutive odd numbers:
// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) 
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumEvenNumbers(rows) {
	// TODO
	let last = 0;
	let sum = 0;
	const arr = Array();
	for (let i = 0; i < rows; i++) {
		arr[i] = Array();
		for (let j = 0; j <= i; j++) {
			arr[i][j] = (j * 2) + 2 + last;
		}
		last = arr[arr.length - 1][i];

		sum += arr[arr.length - 1][i];
	}

	console.log(arr)
	return sum;
}

console.log(rowSumEvenNumbers(9))