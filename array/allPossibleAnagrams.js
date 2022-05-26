let s = "cbaebabacd"
let p = "abc"

function findAllAnagrams(p, s) {
    let result = []
    let arrP = new Array(26).fill(0)
    let arrS = new Array(26).fill(0)

    pLength = p.length
    sLength = s.length

    for (let i = 0; i < pLength; i++) {
        arrP[p.charCodeAt(i) - "a".charCodeAt(0)]++
    }
    for (let i = 0; i < sLength; i++) {
        arrS[s.charCodeAt(i) - "a".charCodeAt(0)]++

        if (i >= p.length) {
            arrS[s.charCodeAt(i - pLength) - "a".charCodeAt(0)]--
        }
        let isAnagram = true
        for (let i = 0; i < 26; i++) {
            if (arrS[i] != arrP[i]) {
                isAnagram = false
                break
            }
        }
        if (isAnagram) {
            result.push(i - pLength + 1)
        }
    }
    return result

}

console.log(findAllAnagrams(p, s))