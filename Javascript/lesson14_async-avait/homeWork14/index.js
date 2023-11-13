const getNameButton = document.getElementById("getName");
const getName = document.querySelector(".name");
// const getNickNameButton = document.getElementById("getNickName");
const getNickName = document.querySelector(".nickName");
const getEmail = document.querySelector(".email");
const getAddresse = document.querySelector(".addresse");
const getURl = document.querySelector(".URl");

function userDataNormalizer(personData) {
    getName.textContent = personData.name;
    getNickName.textContent = personData.username;
    getEmail.textContent = personData.email;
    getAddresse.textContent = `${personData.address.city} ${personData.address.street}
     ${personData.address.suite} zipcode: ${personData.address.zipcode}`;
    getURl.textContent = personData.website;
}

async function getUserData() {
  const testURL = "https://yuri018.github.io/testWorkAPI/users.json";
  const response = await fetch(testURL);

  console.log("Response", response); // обьект Response
  console.log("Prop ok", response.ok); // true или false
  console.log("Prop status", response.status); // 200,400,500 и т.д

  const result = await response.json();
  console.log(result);

  if(response.ok){
    const userInfo = result.Users;
    const user = userInfo[0];
    userDataNormalizer(user);
  } else {
    console.log("Some Erorr");
    alert(result);
  }
}

getNameButton.addEventListener('click', getUserData);
// getNickNameButton.addEventListener('click', getUserData);
