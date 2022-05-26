let s = "Let's take LeetCode contest"
//Output: "s'teL ekat edoCteeL tsetnoc"
function reverseWords(s) {
    s = s.split(" ")

    for (let i = 0; i < s.length; i++) {
        s[i] = inPlaceReverse(s[i])
    }
  return  s.join(" ")
 
}

function inPlaceReverse(word) {
    word = word.split("")
    left = 0;
    right = word.length - 1;

    while (left < right) {
        let temp = word[left]
        word[left] = word[right]
        word[right] = temp
        left++
        right--
    }
   
    return word.join("")
}


console.log(reverseWords(s))