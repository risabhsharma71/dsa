//time complexity O(nlogn)+ O(n)
//space complexity O(n)

const person1 = [[1000, 1400], [1500, 1700], [1930, 2030]]
const person2 = [[1000, 1200], [1200, 1500], [1800, 2100], [2310, 2340]]
const interval = 50
const breakTime = 10
//expectedOp =[[2110,2200],[2210,2300]]

function findInterval(person1, person2, interval, breakTime) {
    let max = 0
    let freeTime = []
    //concat and sort both the intervals
    let concatedCalenderInvites = person1.concat(person2)
    let sortedBusyTime = concatedCalenderInvites.sort((a, b) => a[0] - b[0])
    let mergedInterval = [sortedBusyTime[0]]
    //merge all the blocked time intervals of candidates
    for (let i = 1; i < sortedBusyTime.length; i++) {
        start1 = mergedInterval[mergedInterval.length - 1][0]
        end1 = mergedInterval[mergedInterval.length - 1][1]
        start2 = sortedBusyTime[i][0]
        end2 = sortedBusyTime[i][1]
        if (end1 >= start2) {
            max = Math.max(end1, end2)
            mergedInterval[mergedInterval.length - 1][1] = max
        } else {
            mergedInterval.push([start2, end2])
        }
    }
    console.log("merged blocked time in calender=======>", mergedInterval)
    //edge case to handle 60 mins to 1:00
    if (breakTime + interval === 60) {
        interval = interval + 40
    }
    //find gaps in between of blocks breakTime+interval find time slot
    let gapTime = 2 * (breakTime + interval)
    for (let i = 0; i < mergedInterval.length - 1; i++) {
        if (mergedInterval[i + 1][0] - mergedInterval[i][1] >= gapTime) {
            freeTime.push(mergedInterval[i][1], mergedInterval[i + 1][0])
        }
    }
    if (freeTime.length) {
        //time of candidate 1
        startTime1 = freeTime[0] + breakTime
        endTime1 = startTime1 + interval
        //time of candidate 2
        startTime2 = endTime1 + breakTime
        endTime2 = startTime2 + interval
        return [[startTime1, endTime1], [startTime2, endTime2]]
    } else {
        //no back to back time avaialble
        return 0
    }


}

console.log("available Time Slots=======>", findInterval(person1, person2, interval, breakTime))



