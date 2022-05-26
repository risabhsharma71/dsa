let s ="bcabc"
var removeDuplicateLetters = function (s) {
    let str = ""
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            continue
        } else {
            str += s[i]
            map[s[i]] = 1
        }
    }
    console.log("str=======>",str)
    return str.split("").sort().join("")
};

console.log(removeDuplicateLetters(s))