console.log(Array.isArray([]));

//Данные пришли с сервера 
const dataFromServer = '1,2,3,4';

console.log(Array.isArray(dataFromServer));

if(Array.isArray(dataFromServer)) {
    console.log(dataFromServer.includes(1));
}