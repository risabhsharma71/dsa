//https://www.youtube.com/watch?v=oaVa-9wmpns
//dutch national flag types

let arr = [0, 1, 2, 0, 1, 2]


function sort012(arr){
 let low =0
 let mid =0
 let high =arr.length-1
while(mid<=high){
    console.log("low :",low,"mid: ",mid,"high  :",high)
     if(arr[mid]==0){
         [arr[mid], arr[low]] = [arr[low], arr[mid]]
         low ++
         mid++
     }else if(arr[mid]==1){
         mid++
     }else{
         [arr[mid], arr[high]] = [arr[high], arr[mid]]
         mid
         high--
     }
 }
 console.log(arr)
 return arr
}

sort012(arr)