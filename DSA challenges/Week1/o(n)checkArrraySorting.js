function checkOrder(arr) {
    let isAscending = true;
    let isDescending = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            isAscending = false;
        }
        if (arr[i] > arr[i - 1]) {
            isDescending = false;
        }
    }

    if (isAscending) return "Ascending";
    if (isDescending) return "Descending";
    return "Not Sorted";
}

console.log(checkOrder([1,2,3,4,5]));       // Ascending
console.log(checkOrder([9,8,7,6,6]));       // Descending
console.log(checkOrder([2,2,3,6,4,5]));     // Not Sorted
