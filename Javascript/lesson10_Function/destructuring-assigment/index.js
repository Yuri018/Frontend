//Присваивание с деструктуризацией
const user = {name: "Fred", age: 19};

//как получить переменную age со значением 19 (старый вариант)
// const age = user.age;
// console.log(age);

//Новый вариант получения переменной (деструктуризация)
const {age, name, job} = user;
console.log(age);
console.log(name);
console.log(job);

// Пример 2 - был объект, как скопировать его пары ключ значения?
const car = {brand: "Opel", price: 15_000};

// создам новый объект, скопирую ключи и значения из старого
const myCar = {...car, color: "red"}; 
console.log(myCar); // { brand: 'Opel', price: 15000, color: 'red' } 

// Пример 3 - скопировать, но заменить значение
const rollsRoys = {...car, brand: "Rolls-Roys"}
console.log(rollsRoys); // { brand: 'Rolls-Roys', price: 15000 }