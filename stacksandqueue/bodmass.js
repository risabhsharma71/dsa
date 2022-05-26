var calculate = function (s) {
    s.replace(/\s/g, '');

    let stack = []
    let prevSign = '+'
    let num = ''

    for (let i = 0; i < s.length; i++) {
        //If it is a number
        if (!isNaN(s[i])) {
            num += s[i]
        }
        if (isNaN(s[i]) || i === s.length - 1) {
            //We don't operate on '+' and '-' since '*' and '/' take priority
            if (prevSign === '+') stack.push(Number(num))
            else if (prevSign === '-') stack.push(Number(-num))
            else if (prevSign === '/') stack.push(Math.trunc(stack.pop() / Number(num)))
            else if (prevSign === '*') stack.push(Number(num) * stack.pop())


            prevSign = s[i]
            num = ''
        }
    }
    return stack.reduce((cur, sum) => cur + sum)
};

console.log(calculate("3+3*2/2"))