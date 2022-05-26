function isAnagram(word1, word2) {
    map1 = {}
    w1Length = word1.length
    w2Length = word2.length

    if (w1Length != w2Length) {
        return false
    }
    //create hashmap 1
    for (const key of word1) {
        if (map1[key]) {
            map1[key] = map1[key] + 1
        } else {
            map1[key] = 1
        }
    }

    for (let i = 0; i < w2Length; i++) {
        if (!(map1[word2[i]])) return false
        map1[word2[i]] = map1[word2[i]] - 1
        if (map1[word2[i]] < 0) return false
    }
    return true
}

console.log(isAnagram("abcd", "dcbe"))