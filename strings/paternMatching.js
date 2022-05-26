function matchPattern(patern, array) {
    let patternMap = {}
    let res = ""
    let i = 0
    for (let j = 0; j < patern.length; j++) {
        let ch = patern[j]
  
        if (!patternMap[ch]) {
            patternMap[ch] = i++
            console.log(patternMap[ch])
            res += (patternMap[ch])
        }else{
            res += (patternMap[ch])
        }
    }
    return res

}

console.log(matchPattern("foo", ["abb", "lol", "Hie", "bcc"]))