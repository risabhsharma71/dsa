var longestPalindrome = function (s) {
    let res = "";
    let resLength = 0;

    for (let i = 0; i < s.length; i++) {
        [res, resLength] = check(i, i, res, resLength, s);
        [res, resLength] = check(i, i + 1, res, resLength, s);
    }
    return res;
};

const check = (l, r, res, resLength, s) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    l++;
    r--;
    let curLength = r - l + 1;
    if (curLength > resLength) {
        resLength = curLength;
        res = s.slice(l, r + 1);
    }
    return [res, resLength]
}

console.log(longestPalindrome("aabac"))
