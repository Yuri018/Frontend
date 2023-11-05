//Массив
//в JS массив не фиксированной длины

//1. Создание пустого массива
const array = [];
const array1 = new Array();

//2. Массив с элементами

const fruits = ["apple", "orange", "lime"];
console.log(fruits);

//3. Изменение по индексу
fruits[1] = "banana";
console.log(fruits);

//4. Циклы


//5. Некоторые методы массивов: push, pop, shift, unshift
const students = ["Pavel", "Anastasia", "Juri"];
console.log(students);

students.push("Oleksandr");//добавляет элемент в конец массива
console.log(students);

students.pop();// можно достать последний элемент из массива, сохранить в переменную, а из массива он удалится
console.log(students);

students.unshift("Egor");//добавляет элемент в начало массива
console.log(students);

const egor = students.shift();// можно достать первый элемент из массива, сохранить в переменную, а из массива он удалится