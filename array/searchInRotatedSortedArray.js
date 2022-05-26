//here tip is find the part of numsay which is not sorted


//let nums = [3, 4, 5, 1, 2];
//let nums = [4, 5, 6, 7, 0, 1, 2]
//let nums = [11, 13, 15, 17]
//let nums = [6, 1, 2, 3, 4, 5]
let n = nums.length;
let key = 6;

function findMinInRotatedSortednumsay(nums) {
    let left = 0
    let right = nums.length - 1
    let res = nums[0]
    if (nums[left] < nums[right]) {
        res = Math.min(res, nums[left])
        return res
    }
    while (left <= right) {

        let mid = Math.floor(right + left / 2)
        res = Math.min(res, nums[mid])
        //this condition is very critical and imp as it tells us if mid is part of left sorted array or not,
        //if yes the remove left part and serach in right part
        if (nums[mid] >= nums[left]) {
            left = mid + 1

        } else {
            right = mid - 1
        }
    }
    return nums[left]

}

console.log(findMinInRotatedSortednumsay(nums))