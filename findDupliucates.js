let arr = [1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 6]

function findDuplicatesInSortedArray(arr) {
    let left = 0
    let right = 1
    while (right < arr.length) {
        if (arr[left] != arr[right]) {
            arr[left + 1] = arr[right]
            left++
            right++
        } else {
            right++
        }
    }
    return arr
}