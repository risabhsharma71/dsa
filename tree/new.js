let arr = [-4, -1, 0, 3, 10]

function sort(arr) {
    let left = 0
    let right = arr.length - 1
    let resultArray = []
    let pointer = arr.length  -1
    while (left <= right) {
        if (Math.abs(arr[left]) > Math.abs(arr[right])){
            resultArray[pointer] = arr[left] * arr[left]
            left++
        } else {
            resultArray[pointer] = arr[right] * arr[right]
            right--
        }
        pointer--
    }
    return resultArray
}

console.log(sort(arr))