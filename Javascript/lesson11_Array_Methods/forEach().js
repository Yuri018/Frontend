const arr1 = [1,2,3];
const arr2 = [4,5,6];

const forEachResult = arr2.forEach((value, index) => {

    if(index === 5) {
        return;
    }
    arr1.push(value);
    // post(url, value)

})

console.log(arr1);
console.log(arr2);
console.log(forEachResult);