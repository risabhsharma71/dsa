function reverseArrayInPlace(a) {
    let i = 0;
    let length = a.length-1
    while (i < length) {
     let tmp = a[i]
       a[i]= a[length]
       a[length]=tmp
       i++ 
       length --
    }
    return a
}
let newArray=[1,2,3,4,5,6]
// console.log(reverseArrayInPlace(newArray))

// console.log(reverseArrayInPlace1(newArray))
// function reverseArrayInPlace1(a){
// for(let i =0;i<Math.floor(a.length/2);i++){
//  a[i],a[a.length-1-i]=[a.length-i-1],a[i]
// }
// return a
// }


