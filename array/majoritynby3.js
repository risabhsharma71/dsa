
//https://www.youtube.com/watch?v=U1-mSBZFvqw&t=601s

//majority element 
//note 

let arr = [3, 3, 4]
let arr1 = [2, 3, 3, 2, 5, 3, 3, 8, 1]

function majority(array) {
    let op = [];

    let element1 = -Infinity
    let count1 = 0
    let element2 = -Infinity
    let count2 = 0
    if (array.length == 1) {
        return [array[0]]
    }
    if (array.length == 2) {
        if (array[0] == array[1]) {
            return [array[0]]
        }
    }
    for (let i = 0; i < array.length; i++) {

        if (element1 === array[i]) {
            count1 = count1 + 1
        } else if (element2 === array[i]) {
            count2 = count2 + 1
        } else if (count1 === 0) {
            element1 = array[i]
            count1 = 1
        } else if (count2 === 0) {
            element2 = array[i]
            count2 = 1
        }
        else {
            count1 = count1 - 1
            count2 = count2 - 1
        }
    }
    let countH1 = 0
    let countH2 = 0
    console.log(element1, element2)
    for (let i = 0; i < array.length; i++) {
        if (element1 == array[i]) {
            countH1++
        }
        if (element2 == array[i]) {
            countH2++
        }
    }
    console.log(countH1, countH2)

    if (countH1 > Math.floor(array.length / 3)) {
        op.push(element1)
    }
    if (countH2 > Math.floor(array.length / 3)) {
        op.push(element2)
    }
    return op
}

console.log(majority(arr))

