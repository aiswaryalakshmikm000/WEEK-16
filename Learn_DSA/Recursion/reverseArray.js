function reverseArray(array) {
    return reverse(array, 0, array.length - 1);
}

function reverse(array, leftIndex, rightIndex) {
    if (leftIndex >= rightIndex) {
        return array;
    }

    [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];

    return reverse(array, leftIndex + 1, rightIndex - 1);
}

console.log(reverseArray([1, 2, 3, 4, 5]));
