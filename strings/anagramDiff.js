function anagramDifference(str, str2) {
    if (str.length !== str2.length) return "invalid input"
    let map = {}
    let diff =0
    for (const key of str) {
        if (map[key]) {
            map[key] += 1
        } else {
            map[key] = 1
        }
    }

    for (const key of str2) {
        if (map[key]) {
            map[key] = map[key] - 1
        } else {
            diff++
        }
    }
    return diff


}
console.log(anagramDifference("buyy", "byee"))