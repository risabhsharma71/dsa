function findBadVersion(sizeOfArray){
let arr =[]
    for(let i=1;i<=sizeOfArray;i++){
arr.push(i)
}
let left = 0
let right = sizeOfArray-1
let result =0
while(left<=right){
    let mid =Math.floor((left+right)/2)
    if (badVersion(arr[mid])){
        result =mid
       right =mid-1

    }else{
      left = mid+1
    }
}
return result
}





function badVersion(version){
console.log(count++)
    if (version === bad){
        return true
    }else{
        return false
    }
}



var bad = 4
var count = 0
console.log(findBadVersion(5))
