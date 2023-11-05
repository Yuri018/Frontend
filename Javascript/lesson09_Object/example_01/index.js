const student = {
    name: "Fred",
    age: 18
};

console.log(student.name);

console.log(student.job);//если поле не существует - выведется undefined

//задать новое значение по ключу
student.name = "Feodor";
console.log(student.name);

//добавляем новое поле (ключ/значение)
student.job = "journalist";
console.log(student);

// Пример 2 
const user = {name: "Semeon", age: 35, "cat name": "Murzik"};
// что делать если ключ состоит из нескольких слов? ""
console.log(user["cat name"]);

//создать новое значение (из нескольких слов) и присвоить ему значение
user["land of birth"] = "Cyprus";
console.log(user);

// Пример 3 Как удалить свойство у объекта?
console.log(user);
delete user.age;    // удалит из объекта соответствующее свойство
console.log(user); // { name: 'Semeon', 'cat name': 'Murzik', 'land of birth': 'Cyprus' }
delete user["land of birth"];

// Пример 4 
const cat = {name: "Markiza", color: "grey"};
const key1 = "color";

// как по ключу сохраненному в переменной достать значение из объекта
console.log(cat.key1);  // undefied
console.log(cat[key1]); // grey
console.log(cat.color); // grey

//Пример 5
// у нас есть переменные, надо создать обьект
const brand = "Iphone";
const price = 200;

// создадим объект
const phone = {brand, price}; // { brand: 'Iphone', price: 200 }
console.log(phone);

//Пример 6
//как создать обьект на основании переменных, но созранить под другими ключами

const bestPrice28 = 400;
const tv = {brand: "Sony", price: bestPrice28};
console.log(tv);

// Пример 7 - Метод внутри объекта

const dog = {

    name: "Paddington",  
    age: 1,
  
    bark(){ 
      console.log("Bark-bark-bark");  
    },  
    fetchToy(){  
      return "Toy"  
    } 
  };
  
  // вызов метода
  
  dog.bark(); //  "Bark-bark-bark"  
  const toy = dog.fetchToy();
  console.log(toy); // Toy
  
  // Мы можем получить массив ключей

const lion = {name: "Alex", origin: "Africa", city: "New-York"};

const keys = Object.keys(lion);

console.log(keys); // [ 'name', 'origin', 'city' ]
  
// Как можем получить массив значения

const values = Object.values(lion);

console.log(values);

// Как получить пары массива [[key, value], [key, value]]

const arrPairs = Object.entries(lion);

console.log(arrPairs); 
// [ [ 'name', 'Alex' ], [ 'origin', 'Africa' ], [ 'city', 'New-York' ] ]

// Цикл for in
const car = {brand: "Porshe", price: 25000, color: "green"};
for (const key in car) {
    console.log(key + ":" + car[key]);
}



  



