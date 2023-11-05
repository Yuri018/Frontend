/*
Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна". 
Создайте еще один массив с возрастами: 18, 27, 74, 34; 
Создайте и заполните при помощи цикла этот новый массив новыми элементами 
по образу: "Семен 18 лет/годов"
*/

const arrayName = ["Семен", "Иван", "Петр", "Татьяна"];
const arrayAge = [18, 27, 74, 34];
const arrayNameAndAge = [];

function getCorrectWord(n) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) return "лет";
  if (n1 > 1 && n1 < 5) return "года";
  if (n1 == 1) return "год";
  return "лет";
}

for (let i = 0; i < arrayName.length; i++) {
  arrayNameAndAge[i] =
    arrayName[i] + " " + arrayAge[i] + " " + getCorrectWord(arrayAge[i]);
}
console.log(arrayNameAndAge);

/*
Используя пройденные на занятии методы массива получите из этого массива 
новый массив, в котором элементы идут в обратной последовательности. 
*/

const reverseArray = [];
let temp;
for (let i = 0; i < arrayNameAndAge.length; i++) {
  temp = arrayNameAndAge[i];
  reverseArray.unshift(temp);
}
console.log(reverseArray);
