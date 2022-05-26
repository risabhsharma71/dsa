let input = [[1, 3], [6, 9]], newInterval = [2, 5]

function insertInterval(input, newInterval) {
    let start = newInterval[0]
    let end = newInterval[1]
    let result = []
    result.push(input[0])
    for (let i = 1; i < input.length; i++) {
        let start1 = input[i][0]
        let end1 = input[i][1]
        if (end <= start1) {
            end1 = Math.max(end1, end)
        } else {
            result.push(input[i])
        }
    }
    console.log(result)
}
 insertInterval(input, newInterval) 