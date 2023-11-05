/*
Создайте классы: Plant, Rose.
Роза должна наследовать Растение. Пусть у растения будут поля:
    рост,   
    возраст.
И метод grow, который увеличивает его рост на 10 см.
У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.
*/

class Plant {
  constructor(growth, age) {
    this.growth = growth;
    this.age = age;
  }
  grow(){
    this.growth += 10;
  }
}

class Rose extends Plant {
    constructor(growth, age, numberOfFlowers){
        super(growth, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}

let rose = new Rose(30, 3, 5);
rose.grow();
console.log(rose);