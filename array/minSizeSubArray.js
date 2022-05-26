let target = 7, nums = [2, 3, 1, 2, 4, 3]

function minSizeSubArray(nums, target) {
    let start = 0
    result = Infinity
    sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= target) {
            result = Math.min(result, i + 1 - start)
            sum -= nums[start]
            start++
        }
    }

    console.log(result)
    result
}

minSizeSubArray(nums, target)