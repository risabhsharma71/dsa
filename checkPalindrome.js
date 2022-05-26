let str = "kayak"
let str1 = "kayak"
//iterative
function checkPalindrome(str) {
    if (str.length == 1) {
        return true
    }
    let left = 0
    let right = str.length - 1
    while (left <= right) {
        if (str[left] == str[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
}

console.log(checkPalindrome(str1))

//recursive

function checkPalindromeRecursive(str) {
    console.log(str)
    if (str.length == 1) {
        return true
    }
    if (str[0] == str[str.length - 1]) {
        console.log("stack call")
        return checkPalindromeRecursive(str.substring(1,str.length-1))
    }
    return false
}


console.log(checkPalindromeRecursive(str1))