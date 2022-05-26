let a = [1, 2, 3, 6, 7, 4, 1, 7, 8]

let b = [1, 2, 3, 4, 5]


function checkIfsorted(arr) {
    let a = checkAscOrDesc(arr[0], arr[1])
    if (a) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (!(arr[i] > arr[i + 1])) {
                return "not sorted"
            }

        }
        return "sorted"
    }
    for (let i = 1; i < arr.length; i--) {
        if (!(arr[i] > arr[i + 1])) {
            return "not sorted"
        } 

    }
    return "sorted"
}
    function checkAscOrDesc(a, b) {
        if (a > b) {
            return 1
        }
        return 0

    };

    console.log(checkIfsorted(b))