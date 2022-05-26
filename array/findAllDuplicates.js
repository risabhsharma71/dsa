let arr = [2,3,5,1,5]
function findAllDupicatesInArray(arr) {
    let opArray = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr)
        let index = Math.abs(arr[i]) - 1
        if (arr[index] < 0) {

            opArray.push(index + 1)
        }
        arr[index] = -arr[index]
    }
    return opArray
}

console.log(findAllDupicatesInArray(arr))