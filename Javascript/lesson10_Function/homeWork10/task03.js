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
let abbreviation = "SS";

function weather(abbreviation, decode) {
    return decode(abbreviation);
}

function decode(abbreviation) {
  switch (abbreviation) {
    case SQ:
      console.log("шквал");
      break;
    case PO:
      console.log("пыльный вихрь");
      break;
    case FC:
      console.log("торнадо");
      break;
    case BR:
      console.log("дымка (видимость от 1 до 9 км)");
      break;
    case HZ:
      console.log("мгла (видимость менее 10 км)");
      break;
    case FU:
      console.log("дым (видимость менее 10 км)");
      break;
    case DS:
      console.log("пыльная буря (видимость менее 10 км)");
      break;
    case SS:
      console.log("песчаная буря (видимость менее 10 км)");
      break;

    default:
        console.log("Солнечно");
      break;
  }
}

