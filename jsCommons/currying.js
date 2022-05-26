function a(a) {
   return function b(b) {
     return   function c(c) {
            console.log(a + b + c)
        }
        
    }
}


a(1)(2)(3)

a("d")("f")("f")