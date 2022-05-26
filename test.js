let s = "cbaebabacd", p = "abc"
//Output: [0, 6]

function getAllPosibleAnagrams(s, p) {
    let sLength = s.length
    let pLength = p.length
    let op = []
    //create a array map to compare elements of both
    sArr = new Array(26).fill(0)
    pArr = new Array(26).fill(0)

    //fill the ref array
    for (let i = 0; i < pLength; i++) {
        pArr[p.charCodeAt(i) - "a".charCodeAt(0)]++
    }
    for (let i = 0; i < sLength; i++) {
        sArr[s.charCodeAt(i) - "a".charCodeAt(0)]++

        if (i >= pLength) {
            sArr[s.charCodeAt(i - (pLength)) - "a".charCodeAt(0)]--
        }
        isAnagram = true
        for (let i = 0; i < pArr.length; i++) {
            if (pArr[i] != sArr[i]) {
                isAnagram = false
                break
            }
        }
console.log(isAnagram)
        if (isAnagram) {
            op.push(i - p.length + 1)
        }


    }
    console.log(op)
    return op
}

getAllPosibleAnagrams(s, p)