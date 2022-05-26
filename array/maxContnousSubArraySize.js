let nums = [3,4,7,2,-3,1,4,2]
function contniousSubArray(arr, target) {
    let start = 0
    let result = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
         sum += arr[i]
         while(sum>=target){
             if(sum==target){
                 console.log(start,i)
                 result++
             }
             sum-=nums[start]
             start++
         }

    }
    return result

}

console.log(contniousSubArray(nums,7))