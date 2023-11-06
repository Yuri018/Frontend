const digits = [0,1,2,3,4,5];

const newdigits = digits.reduce((accumulator, currentValue) =>{
    console.log(accumulator, currentValue)
    return accumulator + currentValue
})

console.log(digits);
console.log(newdigits);