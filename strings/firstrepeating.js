function firstRepeated(arr, n) {
    let map = {}
    for (const element of arr) {
        if (map[element]) {
            map[element] += 1
        } else {
            map[element] = 1
        }
    }
    for (const element of arr) {
        if (map[element] && map[element] > 1) {
            return element
        }
    }

    return -1
}



console.log(firstRepeated([2, 3, 4, 5], 7))