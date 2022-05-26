let arr = [1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 6]

function removeDuplicatesFromSortedArray(arr) {
    let left = 0
    let right = 0
    while (right < arr.length) {
        if (arr[left] != arr[right]) {
            arr[left + 1] = arr[right]
            left++
            right++
        } else {
            right++
        }
    }
    return arr.splice(0, left + 1)
}
console.log(removeDuplicatesFromSortedArray(arr))


