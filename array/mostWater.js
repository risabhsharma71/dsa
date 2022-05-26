let container = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let containerLength = container.length - 1
//Output: 6


function mostWaterContainer(container, containerLength) {
    let leftPointer = 0;
    let rightPointer = containerLength
    let waterVolume = 0
    let TempwaterVolume =0
    let base = 0
    while (leftPointer < rightPointer) {
        base = rightPointer - leftPointer
        TempwaterVolume = base * Math.min(container[leftPointer], container[rightPointer])
           waterVolume = Math.max(TempwaterVolume,waterVolume)
        if (container[leftPointer] < container[rightPointer]){
            leftPointer++
        }else{
            rightPointer--
        }

    }
    console.log(waterVolume)
    return waterVolume
}

mostWaterContainer(container, containerLength)
