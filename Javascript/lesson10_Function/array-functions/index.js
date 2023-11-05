const sum = (a, b) => a + b;
const res = sum(8, 9);

const sunVer2 = (a, b) => {
    return a + b;
}
console.log(sunVer2(3, 5));

const print = () => {
    console.log("Example");
}

//как передать функции в качестве переметров
function calculate(a, b, operation){
    return operation(a, b);
}

const res1 = calculate(9, 10, sum);//Заранее создана функция
console.log(res1);
const res2 = calculate(9, 10, (a, b) => a - b);//С передачей стрелки в вызов функции
console.log(res2);
const res3 = calculate(9, 10, function(a, b){return a - b;});//С передачей анонимной функции в качестве параметра
console.log(res3);

/*
// создайте функцию cook, которая принимает три параметра:
// 1. ингридиент1
// 2. ингридиент2
// 3. функция - которая описывает метод приготовления 
// - должна просто выводить в консоль
 
// Пример
// cook("яйцо", "лук", cookImpl)
// "Жарим яйцо и добавляем лук, вуаля, кушать подано"
*/

function cook(i1, i2, recipe){
    recipe(i1, i2);
}
cook("яйцо", "лук", (i1, i2) => console.log(`Жарим ${i1} и добавляем ${i2}, вуаля, кушать подано`));
