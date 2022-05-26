function productExceptSelf(nums){
    res =[]
    let prefFix =1
    let postFix =1

    for(let i=0;i<nums.length;i++){
        res[i]=prefFix
        prefFix *=nums[i]
    }
    for(let i=nums.length-1;i>=0;i--){
        res[i]*=postFix
        postFix *=nums[i]
    }
    return res
}

let nums =[1,2,3,4]
console.log(productExceptSelf(nums))