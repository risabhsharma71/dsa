function outer(){
    let a = "hello risabh"
    function inner(){
        console.log("outer scope in inner=====>",a)
    }
    return inner
}

console.log(outer()())