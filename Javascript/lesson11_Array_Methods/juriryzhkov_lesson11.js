
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


// 1 способ решения через rest оператор

const newArrayCase1 = cars.map((value) => {
    const { price, ...rest } = value; 
    return rest;
  });
  console.log(newArrayCase1);
  
  // 2 способ c методом forEach(), и rest оператором
  const newArrayCase2 = [];
  cars.forEach((value) => {
    const { price, ...rest } = value;
    newArrayCase2.push(rest);
  });
  
  console.log(cars);
  console.log(newArrayCase2);
  
  // Как работает rest и spread  
  const newArrayWithRest = cars.map((value) => {
    // Порядок деструктуризации не важен, первым может быть и brand
    //   const { price, isDiesel, brand } = value;
    const { price, ...rest } = value; 
    console.log(price);
    console.log(rest); 
    // const newPrice = value.price;
    // const isDiesel = value.isDiesel;
    return rest;
  });  
  console.log(newArrayWithRest);
  
  // 3 вариант решения задачи - с использованием метода delete и map()  
  const newArrayCase3 = cars.map((values) => {
    // клонируем обьект
    const { ...rest } = values;
    // удаляем св-во price из нового обьекта
    delete rest.price;  
    // возвращаем новые обьекты
    return { ...rest };
  }); 
  console.log(newArrayCase3);

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

const totalCostNonDiesel = cars
  .filter(car => !car.isDiesel)
  .reduce((total, car) => total + car.price, 0);
console.log(totalCostNonDiesel);

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