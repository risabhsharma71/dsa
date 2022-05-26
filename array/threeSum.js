function threeSum(nums) {
     nums = nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            threeSum = nums[i] + nums[left] + nums[right]
            if (threeSum === 0) {
                return [nums[i], nums[left], nums[right]]
            }
            if (threeSum > 0) {
                right--
            } else {
                left++
            }
        }
    }
}
let nums = [-3, 3, 4, -3, 1, 2]
console.log(threeSum(nums))