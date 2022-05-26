//this queestion comes with many corner cases
//ref https://www.youtube.com/watch?v=pBYTiYyckGA


`note:
1.check if existing number is palinderome or not if yes add 1 to it
2.check even or odd by length
3.for odd cases:
  if left half > right half
   else
4.for even cases
 if left half> right half`
function smallestNextPalindrome(str) {
    let n = str.length
    if (checkIfPalindrome(str)) {
        str = (parseInt(str) + 1).toString()
    }
    let left, right, mid;
    //handle even
    if (str.length % 2 === 0) {
        left = str.substring(0, n / 2)
        right = str.substring(n / 2, n)
        let reverseOfleft = left.split("").reverse().join("")
        if (reverseOfleft > right) {
            return left + reverseOfleft
        } else {
            left = (parseInt(left) + 1).toString()
            let reverseOfleft = left.split("").reverse().join("")
           let palindrome= left + reverseOfleft
           return palindrome
        }
    } else {
        //handle odd
        console.log("odd case")
        right = str.substring((n / 2) + 1, n)
        mid = str[Math.floor(n / 2)]
        left = str.substring(0, n / 2)

        let reverseOfleft = left.split("").reverse().join("")
        if (reverseOfleft > right) {
            return left + mid + reverseOfleft
        } else {
            let leftmid = (parseInt(left + mid) + 1).toString()
            leftmidFlipPlus1 = leftmid.split("").reverse().join("").substring(1, leftmid.length)

            let palindrome = leftmid + leftmidFlipPlus1

            return palindrome
        }
    }



}

function checkIfPalindrome(str) {
    if (str === str.split("").reverse().join("")) return true
    return false
}




console.log(smallestNextPalindrome("1327"))


//12814//