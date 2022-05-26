let nums = [1, 2, 3, 4, 5, 6, 7], k = 3

function rotate(nums, k) {
    k = k % nums.length //very imp for edge cases
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
    return nums
}

function reverse(nums, start, stop) {
    while (start < stop) {
        let tmp = nums[start]
        nums[start] = nums[stop]
        nums[stop] = tmp
        start++
        stop--
    }

    return nums
}

console.log(rotate(nums, k))
