let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
 nums1=[1,7,9,0,0,0]
//Output: [1, 2, 2, 3, 5, 6]

function mergeSortedArrays(nums1,nums2,m,n){
    let i= nums1.length-1
    let f= m-1 
    let s = n-1
  while(i>=0){
   if(nums1[f]<nums2[s]){
       nums1[i]=nums2[s]
       i--
       s--

   }else{
       nums1[i]=nums1[f]
       i--
       f--
   }
  }
  return nums1
}

console.log(mergeSortedArrays(nums1, nums2, m, n))