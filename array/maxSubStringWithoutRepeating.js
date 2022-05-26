//long subsrting without repeating characters

//Input: s = "abcabcbb"
//Output: 3


let s = "abcdabcbb"
let s1 = "pwwkew"

function longSubstringWithoutRepeat(s) {

    a_pointer = 0
    b_pointer = 0
    max = 0
    let charStore = new Set()

    while (b_pointer < s.length) {
        if (charStore.has(s[b_pointer])) {
            charStore.delete(s[a_pointer])
            a_pointer++
        } else {
            charStore.add(s[b_pointer])
            b_pointer++
            max = Math.max(b_pointer - a_pointer, max)
        }
    }
    return max
}
let result = longSubstringWithoutRepeat(s1)
console.log(result);