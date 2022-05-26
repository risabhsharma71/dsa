let arr = [7, 1, 5, 3, 6, 4]

function stockBuySell(arr) {

    let left =0
    let right =1
    let max = 0
    while (right < arr.length) {
        if (arr[left] > arr[right]) {
            left = right
            right++
        } else {
            max = Math.max(max, arr[right]-arr[left])
            right++
        }
    }
 
    console.log(max)

}
stockBuySell(arr) 