const helloElement = document.getElementById("hello");
console.log(helloElement);
const pandaImgElement = document.getElementById("panda");
console.log(pandaImgElement);

// helloElement.textContent += " and Goodbye";
helloElement.textContent = "Goodbye";

pandaImgElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/440px-Grosser_Panda.JPG";

pandaImgElement.className = "panda-img";
pandaImgElement.classList.add("new-class");