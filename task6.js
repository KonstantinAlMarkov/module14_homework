//URL для проверки https://codepen.io/bananaGoose/pen/QWdMVqX
let num;
//генерим рандомное число
function setNum()
{
  num = Math.ceil(Math.random() * 100);
}

// Создаем promise
const myPromise = new Promise((resolve, reject) => {
    //генерим число с задержкой
    setTimeout(setNum(), 500); //замени на 3000
    if (num % 2 == 0) {
      resolve(`Успешное выполнение promise. Число: ${num}`);
    } else {
      reject(`Неуспешное выполнение promise. Число: ${num}`);
    }
});
// Выполняем promise
myPromise
  .then((result) => {
    console.log('Обрабатываем resolve', result);
  })
  .catch((error) => {
    console.log('Обрабатываем reject', error);
});
