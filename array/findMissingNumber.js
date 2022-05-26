// Problem statement: Number are in consecutive order, find the missing number.?
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]
// o / p: 9

//find using xor most optimized
//or n (n+1)/2
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]
    arr = [3, 2, 1, 7, 6, 5, 4, 8, 10]
async function findMissing(arr) {
    let fullArray;
    let missingArray;
    let lengthOfMainArray = arr.length + 1
    for (let i = 1; i <= lengthOfMainArray; i++) {
        fullArray ^= i
    }
    console.log(fullArray)
    for (let i = 0; i < arr.length; i++) {
        missingArray ^= arr[i]
    }
    console.log("apna answer", fullArray ^ missingArray)

}
findMissing(arr)