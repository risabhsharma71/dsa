
var isMonotonic = function (nums) {
    let same = nums[0] === nums[nums.length - 1]
    let greater = nums[0] > nums[nums.length - 1]
    let lesser = nums[0] < nums[nums.length - 1]
    if (same) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] != nums[i + 1]) {
                return false
            }
        }
        return true
    } else if (greater) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (!(nums[i] >= nums[i + 1])) {
                return false
            }
        }
        return true
    } else {
        console.log("lesser condition")
        for (let i = 0; i < nums.length - 1; i++) {
            console.log(nums[i], nums[i+1])
            if (!(nums[i] <= nums[i + 1])) {
                return false
            }
        }
        return true
    }


}

let arr = [1, 2, 2, 3]
console.log(isMonotonic(arr))
