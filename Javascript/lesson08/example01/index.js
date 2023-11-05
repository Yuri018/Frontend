console.log("Hello");

//примитивные типы

//1. String
let myName = 'John';
let str1 = "Можно писать в одинарных и двойных кавычках";

let str3 = myName.toLocaleUpperCase();

//2. Number - могут быть целыми числами и числами с плавающей точкой
let n1 = 10;
let n2 = 10.5;

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 2^53 − 1.

//3. BigInt
let n3 = 128n; // пишется с префиксом n (маленькая)

//4. Boolean
let isDrunk = true;
if(isDrunk){
    console.log("МОре по колено...");
}
//тернарный оператор
let animal = isDrunk? "pug": "Human";

//5. Symbol
const s1 = Symbol("somihing");
console.log(s1);

//6. undefined - непресвоенное значение, неопределенное значение
let u1;
console.log(u1);
//можно задать вручную

//7. null - отсутствие значения
let n4 = null;
//возвращаемое значение, если значение не найдено

//ПРЕОБРАЗОВАНИЕ ТИПОВ
//1. Преобразование в строку

//неявное
let str4 = 9 + ""; //через конкатенацию
//явное
let str5 = String(9);

//2. Приобразование в число
//неявное
const n7 = + "9";
const n8 = +"10" + +"15";
console.log(n8);

//явное
let n9 = Number("9");
console.log(typeof n9);

//3. Преобразование в boolean
//явное
console.log(Boolean(12));  //true
console.log(Boolean(-12)); //true
console.log(Boolean(0));   //false
console.log(Boolean(NaN)); //false

console.log(Boolean("cat")); //true
console.log(Boolean(""));    //false

console.log(Boolean(null));      //false
console.log(Boolean(undefined)); //false

//неявное
const name1 = "Igor"; 
if(name1){ // String преобразуется в Boolean
    console.log("ПРивет " + name1);
} else {
    console.log("Else");
}

//ОПЕРАТОРЫ
//1. Тернарный оператор
