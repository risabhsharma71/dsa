//kadaynes algo would fail as for mutliplication the neagtive and
// negative make positive and if the numbers are in alternation fashion like -1 3 -5 4 -1 so it would fail
//https://www.youtube.com/watch?v=vtJvbRlHqTA

let nums = [5, 4, -1, 7, 8]
let arr = [2, 3, -2, 4]
let arr1 = [-2, 3, 4]

function maxProductSubArray(a) {
    let curr_max_product = a[0]
    curr_min_product =a[0]
    let prev_max_product = a[0]
    let prev_min_product = a[0]
    let ans = a[0]
    for(let i=1;i<a.length;i++){
        curr_max_product=Math.max(prev_max_product*a[i],prev_min_product*a[i],a[i])
        curr_min_product = Math.min(prev_max_product * a[i], prev_min_product * a[i], a[i])
    ans =Math.max(ans,curr_max_product)
    prev_max_product =curr_max_product
    prev_min_product = curr_min_product

    }
    return ans

}

console.log(maxProductSubArray(arr1))