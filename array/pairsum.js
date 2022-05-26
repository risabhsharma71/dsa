`You are given an integer array 'ARR' of size 'N' and an integer 'S'.
 Your task is to return the list of all pairs of elements such that each sum of elements of each pair equals 'S'.`


 //if numbers dont repeat them selfs we can find pairs as well as counts
 //but if numbers are repeating use 2 pointers
//link : https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
let arr = [0, 1, 3, 6, 7, 5, 9]

function pairSum(arr, sum) {
    let indexArray = [];
    let indexMap = {};

    for(let i=0;i<arr.length;i++){
        indexMap[arr[i]]=i
    }
    console.log(indexMap)
    for (let i = 0; i < arr.length; i++) {
        if (sum - arr[i] in indexMap) {
            indexArray.push([i, indexMap[sum - arr[i]]])
        }
    }
    return indexArray
}


console.log(pairSum(arr, 9))
