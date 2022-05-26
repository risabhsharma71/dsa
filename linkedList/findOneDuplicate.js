let arr = [1, 3, 4, 2, 3]

function findDuplicate(arr) {
    let slow = 0
    let fast = 0
    let pointer = 0
    while (fast !=undefined) {
        fast = arr[arr[fast]]
        slow = arr[slow]
        if (slow === fast) break
    }
    if(fast===undefined){
        return "array doesnt have duplicates"
    }
    
    console.log(slow,fast)
    while (pointer != slow) {
        slow = arr[slow]
        pointer = arr[pointer]
    }
    return pointer
}

console.log(findDuplicate(arr))