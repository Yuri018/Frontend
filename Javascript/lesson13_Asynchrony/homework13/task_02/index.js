/*
Задание 2
Создать кнопку "Изменить цвет" и создайте квадрат красного цвета. при нажатии на кнопку, 
через 2 секнды цвет должен изменитьяся на зеленый
*/

const buttonCangeColor = document.getElementById("colorChange");
const squareChangeColor = document.getElementById("square");

const changeColor = () => {
  setTimeout(() => {
    squareChangeColor.style.backgroundColor = "green";
  }, 2000);
};

buttonCangeColor.addEventListener("click", changeColor);
