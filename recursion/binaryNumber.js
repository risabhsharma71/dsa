function binaryNumber(decimal,result){
    if(decimal ==0){
        console.log(result)
        return result
    }
    result = decimal%2+ result
   return binaryNumber(Math.floor(decimal/2),result)
}

let decimal =233
let result =""
binaryNumber(decimal, result)