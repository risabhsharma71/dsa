// Input: ['rt123', 'rr567', '12356', '% $r32', '7 * ytfd']
// o / p: ['rt123', 'rr567']

let input = ['rt123', 'rr567', '12356', '% $r32', '7 * ytfd']


function findSpecialChar(input) {
    let r = /[^a-z A-z 0-9]/
    for (const word of input) {
        console.log(r.test(word))
        if (word.match(r)){
            console.log(word)
        }
    }
}
findSpecialChar(input)