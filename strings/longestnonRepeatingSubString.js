let str = "bbbbbb"
//dynamic sliding window
function longestNonRepeatingSubString(str) {
    let a_pointer = 0;
    let b_pointer = 0;
    let max = 0;
    let obj = {}
    while (b_pointer < str.length) {
        if (!(obj[str[b_pointer]])) {
            obj[str[b_pointer]] = 1
            b_pointer++
            max = Math.max(Object.keys(obj).length,max)

        } else {
           delete obj[str[a_pointer]]
           a_pointer++
        }
    }
return max
}
console.log(longestNonRepeatingSubString(str))