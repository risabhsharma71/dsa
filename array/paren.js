let pattern = `[{({{}})}]`
console.log(pattern)
function checkBalanced(pattern) {
    let length = pattern.length
  let patternMap = {
        '[': "]",
        '(': ")",
        '{': '}'
    }
    if (length % 2 != 0) return "failed due to odd number of elements"
    for (let i = 0; i < length; i++) {
        // console.log(pattern[i])
        console.log(i)
        if (patternMap[pattern[i]] != pattern[length - 1]) return "failed due to wrong pattern"
        length -= 1
    }
    return "is a balanced pattern"
}

console.log(checkBalanced(pattern))