const createBtnElement = document.getElementById("btn_create");
const removeBtnElement = document.getElementById("remove");

const newElement = document.createElement("p");
newElement.classList.add("new-paragraph");
newElement.id = "first-paragraph";
newElement.textContent = "Текст нового параграфа";
console.log(newElement);

createBtnElement.addEventListener('click', ()=> {
    console.log("click");
    document.body.append(newElement);
});

removeBtnElement.addEventListener('click', ()=> {
    newElement.remove;
});
