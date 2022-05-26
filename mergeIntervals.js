let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
let intervals1 = [[1, 4], [0, 4]]
function mergeIntervals(intervals) {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    let result = [sortedIntervals[0]]
    console.log(result)
    let max = 0
    for (let i = 1; i < sortedIntervals.length; i++) {
        start1 = result[result.length - 1][0]
        end1 = result[result.length - 1][1]
        start2 = sortedIntervals[i][0]
        end2 = sortedIntervals[i][1]
        if (end1 >= start2) {
            max = Math.max(end1, end2)
            console.log("max =========>", max)
            result[result.length - 1][1] = max

        } else {
            result.push([start2, end2])
        }
    }
    return result

}

console.log(mergeIntervals(intervals1))