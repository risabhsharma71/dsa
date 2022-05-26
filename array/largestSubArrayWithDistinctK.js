let s = "eceba", k = 2

function findLargestSubArray(s, k) {
    s = s.split("")
    let maxSorFar = new Map()
    let max = 0
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar =  s[windowEnd]
        if (maxSorFar.get(rightChar)) {
            maxSorFar.set(rightChar, maxSorFar.get(rightChar) + 1)
 
        } else {
            maxSorFar.set(rightChar, 1)
        }
        while (maxSorFar.size>k) {
             let leftChar =s[windowStart]
             if(maxSorFar.get(leftChar)>1){
                 maxSorFar.set(leftChar,maxSorFar.get(leftChar)-1)
             }else{
                 maxSorFar.delete(leftChar)
             }
             windowStart++
        }
        max= Math.max(max,(windowEnd-windowStart)+1) 
       
    }
    return max
}

console.log(findLargestSubArray(s,k))