function stepsClimbStairs(n){
    let one =1,two=1
for(let i=0;i<n-1;i++){
  temp =one
    one = one+two
    two = temp
}
return one
}

console.log(stepsClimbStairs(5))