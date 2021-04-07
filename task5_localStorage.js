//URL для проверки https://codepen.io/bananaGoose/pen/bGgrMQX
// Получаем данные по ключу tstKey в localStorage
let myKey = localStorage.getItem('tstKey');
// Если localStorage пуст, то ключа не будет.
if(myKey === null)
{
  var usrName = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
  var curDate = new Date();
  
  // JSON, который мы будем записывать
  const jsonString = `
  {
    "name": ${usrName},
    "date": ${curDate}
  }`;  
  // Запишем данные в localStorage в виде JSON
  localStorage.setItem('tstKey', jsonString);
}
else
{
  alert(`Добрый день, ${myKey.name}! Давно не виделись. В последний раз вы были у нас дата последнего посещения ${myKey.date}`);  
  
  // JSON, который мы будем перезаписывать
  const jsonString = `
  {
    "name": ${myKey.name},
    "date": ${new Date()}
  }`;  
  // Запишем новые данные в localStorage в виде JSON
  localStorage.setItem('tstKey', jsonString);
}
