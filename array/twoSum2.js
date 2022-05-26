let arr = [2, 7, 11, 15], target = 18

function findTwoSum(nums, target){
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] == target) {
            return [left, right]
        } else if (nums[left] + nums[right] > target) {
            right--
        } else {
            left++
        }
    }
    return [-1, -1]
}
console.log(findTwoSum(arr,target))