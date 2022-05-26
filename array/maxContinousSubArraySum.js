//let arr = [23, 2, 4, 6, 7], k = 6
//let arr =[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//let arr = [-2, -3, 4, -1, -2, 1, 5, -3]
//let nums = [5, 4, -1, 7, 8]
let arr = [2, 3, -2, 4]
let nums = [-2, -3, 4, -1, -2, 1, 5, -3]
function contniousSubArray(arr, k) {
    let maxEndHere = 0
    let maxSoFar = -Infinity


    for (let i = 0; i < arr.length; i++) {
        maxEndHere += arr[i]
        if (maxEndHere < arr[i]) {
            maxEndHere = arr[i]
        }
        if (maxSoFar < maxEndHere) {
            maxSoFar = maxEndHere
        }
        

    }
    return maxSoFar

}

console.log(contniousSubArray(nums))