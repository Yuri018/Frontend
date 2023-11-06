// Создать новый массив который будет увеличивать каждый элемент массива на 5

const newNumbers = [1, 2, 3, 4, 5].map((currentValue) => {
    return currentValue + 5;
})

console.log(newNumbers);

// сумма значений и индексов для нового массива

const arraySum  = [1, 2, 3, 4, 5].map((currentValue, index) => {
    return currentValue + index;
})

console.log(arraySum);

// Использование array параметра

const arraySumWithArrayMethod = [1, 2, 3, 4, 5].map((currentValue, index, array) => {
    return array[index] + currentValue;
})

console.log(arraySumWithArrayMethod);
