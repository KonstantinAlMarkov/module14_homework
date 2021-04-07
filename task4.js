// URL для проверки https://codepen.io/bananaGoose/pen/LYxLpbZ
// Урл для запроса. Возвращает
const reqUrl = "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440";
//кнопка
const btnGet = document.querySelector('.getList');
//список с годами
const yearList = document.querySelector('.year');
//первая строка таблицы
const tableFirstLane = document.querySelector('.year_tr_first');
//вторая строка таблицы
const tableSecondLane = document.querySelector('.year_tr_second');
//для URL quickchart.io
const qcURL = document.querySelector('.forURL');

//отрисовка таблицы
function DrawTable(yearData)
{
    let firstLane = '';
    let secondLane = '';
    let qcLabels = '';
    let qcData = '';
  
    for(var key in yearData.sales){  
          console.log(key);
          console.log(yearData.sales[key]);
          const yearCell = `<td>${key}</td>`;
          const yearDataCell = `<td>${yearData.sales[key]}</td>`;
          firstLane = firstLane + yearCell;
          qcLabels.length > 0 ? qcLabels = qcLabels + `,\`${key}\``: qcLabels = qcLabels + `\`${key}\``;
      
          secondLane = secondLane + yearDataCell;
          qcData.length > 0 ? qcData = qcData + `,\`${yearData.sales[key]}\``: qcData = qcData + `\`${yearData.sales[key]}\``; 
    }
  
    tableFirstLane.innerHTML = firstLane;  
    tableSecondLane.innerHTML = secondLane;
    qcURL.innerHTML = `
    <a href="https://quickchart.io/chart?c={type:'bar',data:{labels:[${qcLabels}], datasets:[{label:'Выручка за year год',data:[${qcData}]}]}}">Просмотреть на https://quickchart.io/</a>`;
}

//коллбэк для получения данных по выбранному году
function GetYearData(year, yearJSON)
{
    const years = JSON.parse(yearJSON);
    for (var i = 0; i < years.length; i++) 
    {
      var currentYear = years[i];
      if (currentYear.year == year)
      {
        DrawTable(currentYear);
      }
    } 
}

//получение данных
function GetData(year, callback){
  var xhr = new XMLHttpRequest();
  //асинхронный тут не нужен
  xhr.open('GET', reqUrl);
  xhr.send();
  xhr.onerror = function() {
  console.log('Ошибка запроса');
  };
  xhr.onload = function(){
    callback(year, xhr.response);
  };
}

// На кнопку вешаем обработчик асинхронного запроса
btnGet.addEventListener('click', () => {
  GetData(yearList.value, GetYearData);
});