// let a = [[1, 3], [2, 3], [5, 6], [6, 7], [8, 10], [9, 11]]

// function mergeIntervals(intervals) {
//     let result = [intervals[0]]
//     for (let i = 1; i < intervals.length; i++) {
//         let start1 = result[result.length - 1][0]
//         let end1 = result[result.length - 1][1]
//         let start2 = intervals[i][0]
//         let end2 = intervals[i][1]
//         if (end1 >= start2) {
//             end2 = Math.max(end1, end2)
//             result[result.length-1][1] = end2
//         }else{
//             result.push(intervals[i])
//         }
//     }
//     return result
// }

// console.log(mergeIntervals(a))


console.log(!isNaN("+"))


let map = new Map()

map.set(1,1)
map.set(2, 2)
map.set(3, 3)
map.set(4, 4)
for(keyVal of map){
    console.log(keyVal)
}
map.delete(1)
map.set(1, 1)
console.log()
for (keyVal of map) {
    console.log(keyVal)
}