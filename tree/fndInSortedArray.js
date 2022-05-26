var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1
        }
    }
    return -1;

};

console.log(search([2,5],5))
console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0,1,2, 3, 5,6,8, 9, 12], 9))


