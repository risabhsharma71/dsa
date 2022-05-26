let nums = [0, 1, 0, 3, 12]
let nums1 =[0,0,0,0,2,3]
let nums2 =[1,0,3,0,12]
//Output: [1, 3, 12, 0, 0]

//bruteforce
// function moveZeros(nums) {
//     let op = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             op.push(nums[i])

//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             op.push(nums[i])
//         }
//     }
//     return op
// }


function moveZeros(nums){
    let left =0;
    let right =0;
    while(left<nums.length&&right<nums.length){
        if(nums[right]===0){
            right++
        }else {
            let temp = nums[right]
            nums[right]= nums[left]
            nums[left]=temp
            left++
            right++
        }
    }
    return nums
}
console.log(moveZeros(nums))

