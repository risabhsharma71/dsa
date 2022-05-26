
//https://www.youtube.com/watch?v=U1-mSBZFvqw&t=601s

//majority element 
//note 

let arr = [1, 2, 3, 4, 3, 3, 3, 3]
let arr1 = [2, 3, 3, 2, 5, 3, 3, 8, 1]

function majority(array) {
    let element = 0
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (count === 0) {
            element = array[i]
            count = 1
        }
        else if (element === array[i]) {
            count = count + 1
        } else {
            count = count - 1
        }
    }
     //this step can be omitted if its mentioned that the provided array is a winning array.if not then 
     // in element we found the candidate.we can confirm if its the winner or not if its not mentioned in the question.
   
    let checkCount = 0
    for (let i = 0; i < array.length; i++) {

        if (element == array[i]) {
            checkCount++
        }
        if (checkCount > Math.floor(array.length / 2)) {
            return `${element} is the winner`
        }
    }
    return `${element} is not a winner but a good candidate`
}
console.log(majority(arr))


