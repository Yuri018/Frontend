/*
Создайте стрелочную функцию, которая бы принимала массив и цифру, 
возвращала бы элемент массива под этим индексом.
*/
const getElementAtIndex = (array, index) => array[index];
let array = [15, 24, 38, -4, 57];
let index = 3;
console.log(getElementAtIndex(array, index));