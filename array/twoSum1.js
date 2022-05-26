//let nums = [1, 3, 4, 2], target = 6;

let nums = [2, 7, 11, 15]
let target = 9
function twoSums(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i]
        if (map[remainder]) {
            return [i, map[remainder]]
        } else {
            map[nums[i]] = i
        }
    }
    console.log(map)
}

console.log(twoSums(nums, target))