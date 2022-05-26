cd 

let arrMax = [9, 4, 5, 6, 8, 1, 7]
let arrMax1 = [9, 9, 9, 9, 9, 9, 9, 9]

function secondMax(arr) {
    let firstMax = -Infinity
    let secondMax = -Infinity

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]

        if (current > firstMax) {
            secondMax = firstMax
            firstMax = current
        } else if (current < firstMax && current > secondMax) {
            secondMax = current
        }
    }
    if (secondMax == -Infinity) {
        return "no second Max"
    }
    console.log(firstMax, secondMax)
}


function secondMin(arr) {
    let firstMin = Infinity
    let secondMin = Infinity

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]

        if (current < firstMin) {
            secondMin = firstMin
            firstMin = current
        } else if (current > firstMin && current < secondMin) {
            secondMin = current
        }

    }
    console.log(firstMin, secondMin)
}
secondMin(arrMax)
secondMax(arrMax)