let arr = [7, 1, 5, 3, 6, 4]

function maxProfitHolding(arr) {
    let left_pointer = 0
    let right_pointer = 1
    let max = 0
    while (right_pointer < arr.length) {
        if (arr[right_pointer] < arr[left_pointer]) {
            left_pointer = right_pointer
            right_pointer++

        } else {
            max = Math.max(max, arr[right_pointer] - arr[left_pointer])
            right_pointer++
        }
    }
    return max
}

console.log(maxProfitHolding(arr))


// function maxProfitintraday(arr){
//     maxProfit =0
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i+1]>arr[i]){
//             buy = arr[i]
//             sell =[arr[i+1]]
//            maxProfit =maxProfit+ (sell-buy)
//         }
//     }
//         return maxProfit

// } console.log(maxProfitintraday(arr))


