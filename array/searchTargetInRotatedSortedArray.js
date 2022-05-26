let arr = [4, 5, 6, 7, 0, 1, 2]
let target = 0
// function searchTargetInRotatedArray(arr, target) {
//     let left = 0;
//     let right = arr.length - 1
//     while (left <= right) {
//         let mid = Math.floor(right + left) / 2
//         console.log(arr[mid])
//         if (arr[mid] == target) {
//             return mid
//         } else if (arr[left] < arr[mid]) {
//             if (target > arr[left] || target < arr[mid]) {
//                 left = mid + 1
//             } else {
//                 right = mid - 1
//             }
//         }else{
//             if(target<arr[right] || target>arr[mid]){
//                right =mid-1
//             }else{
//                 left = mid + 1
//             }
//         }

//     }
//     return false
// }

function searchTargetInRotatedArray(arr, target) {
    let left = 0
    let right = arr.length - 1
    let leftMostElement = arr[left]
    let rightMostElement = arr[right]
    let mid = Math.floor(left + right) / 2
    if (leftMostElement < rightMostElement) {
    
    } else {
        if (target > leftMostElement && target < mid) {
            console.log("else 1")
        } (target < leftMostElement && target > mid){

        }
    }
}

console.log(searchTargetInRotatedArray(arr, target))