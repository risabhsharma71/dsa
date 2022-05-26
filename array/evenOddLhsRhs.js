let arr = [12, 34, 45, 9, 8, 90, 3]


function segregateEvenOdd(arr) {
    let left = 0
    let right = arr.length - 1

    while (right >left) {

        if (arr[left] % 2 == 0) {
            left++
        } if (arr[right] % 2 != 0) {
            right--

        } if (arr[left] % 2 != 0 && arr[right] % 2 == 0) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

            left++
            right--
        }
        console.log(arr)
    }
    return arr
}
console.log(segregateEvenOdd(arr))