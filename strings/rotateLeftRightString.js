//Left And Right Rotation Of A String

let str = "abcdef"
n = 2
//abcdefabcdef
//cdefab
//efabcd

const rotateleftAndRight = (str, n) => {
    leftString = ""
    rightString = ""
    windowSize = str.length - 1
    console.log("window size=======>", windowSize)
    str = str + str
    console.log(str)
    //left shift
    for (let i = n; i <= windowSize + n; i++) {
        leftString += str[i]
    }
    console.log(leftString)

    //for  rightShift
    for (let i = windowSize - n; i < windowSize + n; i++) {
        rightString += str[i]
    }
    console.log(rightString)
}

rotateleftAndRight(str, n)


const rotate = (str, n) => {

}