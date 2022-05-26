//https://www.youtube.com/watch?v=EkJ2Us1DowA

let timeSeries = [1, 4], duration = 2
//Output: 4

function findPoisonedDuration(timeSeries, duration) {
    let poisonedTime = 0
    for (let i = 1; i < timeSeries.length; i++) {
        if (timeSeries[i] - timeSeries[i - 1] >= duration) {
            poisonedTime += duration
        } else {
            poisonedTime += timeSeries[i] - timeSeries[i - 1]
        }
    }
    return poisonedTime + duration
}

console.log(findPoisonedDuration(timeSeries, duration))