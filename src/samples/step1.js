const data = [1,2,3,4,5,6,7,8,9,10]

console.log('forEach')
data.forEach((datum) => console.log(datum))


console.log('for')
for (const datum of data) {
    console.log(datum)
}

console.log('for i')
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

