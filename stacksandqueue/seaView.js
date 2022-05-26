let arr = [4, 1, 1, 1]

function seaViewBuildings(arr) {
    let maxSoFar = 0
    let opArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxSoFar) {
            opArray.push(i)
            maxSoFar=arr[i]
        }
    }
    return opArray.reverse()
}
console.log(seaViewBuildings(arr))