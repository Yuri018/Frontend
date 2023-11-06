
//Задание 1
//У вас есть массив объектов:
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
//Создайте на основе старого массива новый массив объектов по образу: 
//[{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]


// const newCars = cars.filter((key) => delete key.price);
// console.log(newCars);

//Задание 2
//Создайте новый массив, где оставьте только машины с дизельным двигателем.

const dieselGars = cars.filter((car) => car.isDiesel);
console.log(dieselGars);

//Задание 3
//Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const gasolinCars = cars.filter((car) => !car.isDiesel);
console.log(gasolinCars);

//Задание 4
//Посчитайте общую стоимость всех машин не с дизельным двигателем.

const totalAmount = cars.reduce((sum, car) => {
    if(!car.isDiesel){
        return sum + car.price; //что-то не работает
    }
});
console.log(totalAmount);

//Задание 5
//Повысьте цену всех машин в массиве на 20%.

const priceIncrease = cars.map((car) => {
    return {...car, price: car.price * 1.2};
  });
  console.log(priceIncrease);

//Задание 6
//Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const replaceCars = cars.map(car => {
    if(car.isDiesel){
        return {brand: "Tesla", price: 25000, isDiesel: false};
    } else {
        return car;
    }
});

console.log(replaceCars);