//Наследование
class Animal {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  hello() {
    console.log(
      "My name " + this.name + "Age: " + this.age + "Weigth: " + this.weight
    );
  }
}

const whale = new Animal("Zug", 200, 8_000);
whale.hello();
console.log(whale.name); //Отдельно обратились к полю

class Snail extends Animal {
  constructor(name, age, weight, speed) {
    super(name, age, weight);
    this.speed = speed;
  }
  rush() {
    console.log("Я бегу к цели со скоростью " + this.speed);
  }
}

const speedy = new Snail("Speedy", 1, 0.1, 0.001);
speedy.rush;

// Создайте класс Alcohol с полями:

// - title
// - strength - крепость
// - volume - объекм бутылки
//  с методом info - выводт в консоль фразу
//  "Ни дня без <название алкоголя>"

// Создайте производный класс Brendy
// - age - выдержка
// - country - страна производства

// Создайте производный класс Liquere
// - sugarAmount - количество сахара

class Alcohol {
  constructor(title, strength, volume) {
    this.title = title;
    this.strength = strength;
    this.volume = volume;
  }
  info() {
    console.log(`Ни дня без ${this.title}`);
  }
}

class Brendy extends Alcohol{
    constructor(title, strength, volume, age, country){
        super(title, strength, volume);
        this.age = age;
        this.country = country;
    }
}

class Liquere extends Alcohol{
    constructor(title, strength, volume, sugarAmount){
        super(title, strength, volume);
        this.sugarAmount = sugarAmount;
    }
}

const metaxa = new Brendy("Metaxa", 40, 0.7, 5, "Grihenland");
metaxa.info();

const amaretto = new Liquere("Amaretto", 25, 0.7, 10);
amaretto.info();

// getters setters 
// приватные поля с решеточки

class Rectangle {

    #sideA;  
    #sideB; 
    constructor(sideA, sideB){  
      this.#sideA = sideA;  
      this.#sideB = sideB;  
    }
  
    get sideA(){  
      return this.#sideA;  
    }
  
    set sideA(sideA){  
      this.#sideA = sideA;  
    }  
  }
  
   
  
  const rect = new Rectangle(10, 5);
  
  console.log(rect.sideA); // использовали геттер
  
  rect.sideA = 12; // изменили - это возможно благодаря сетеру
  
  console.log(rect.sideA);
  
  // для sideB мы не написали - поэтому не сможем изменить или получить
  
  
  
  
  