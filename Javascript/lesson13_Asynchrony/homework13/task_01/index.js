/*
Задание 1
Появление цифр на экране от 1 до 5: Создайте страницу с 5 элементами (например, div). 
Используйте setTimeout(), Нужно сделать их видимыми по очереди через каждую секунду после загрузки страницы.
*/

const showElement = (id, delay) => {
  setTimeout(() => {
    let temp = document.getElementById(id);
    temp.classList.remove("hidden");
  }, delay);
};
let delay = 1000;

showElement("one", delay * 1);
showElement("two", delay * 2);
showElement("three", delay * 3);
showElement("four", delay * 4);
showElement("five", delay * 5);
