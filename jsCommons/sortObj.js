const list = [
    { color: 'white', size: 'XXL' },
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' }
]

list.sort((a, b) => (a.color > b.color?1:-1 ))
console.log(list)