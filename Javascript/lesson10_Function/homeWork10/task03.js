/*
Создайте функцию, которая бы принимала бы следующие параметры:
  код погоды
  функция decode, которая дает расшифровку погоды по коду.
Функция должна возвращать строку, описывающую погоду.
SQ – шквал
PO – пыльный вихрь
FC - торнадо
BR – дымка (видимость от 1 до 9 км)
HZ – мгла (видимость менее 10 км)
FU – дым (видимость менее 10 км)
DS - пыльная буря (видимость менее 10 км)
SS - песчаная буря (видимость менее 10 км)
*/
function decode(code){
  switch (code) {
    case "SQ":
      return "шквал";
    case "PO":
      return "пыльный вихрь";
    case "FC":
      return "торнадо";
    case "BR":
      return "дымка (видимость от 1 до 9 км)";
    case "HZ":
      return "мгла (видимость менее 10 км)";
    case "FU":
      return "дым (видимость менее 10 км)";
    case "DS":
      return "пыльная буря (видимость менее 10 км)";
    case "SS":
      return "песчаная буря (видимость менее 10 км)";
    default:
      return "нет такого когда";
  }
}

function weatherCode(weather_code, decode){
  return decode(weather_code);
}

const result = weatherCode("PO", decode);
console.log(result);
console.log(weatherCode("SS", decode));
console.log(weatherCode("AA", decode));

