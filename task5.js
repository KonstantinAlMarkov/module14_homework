//проверяем куку
var name = getCookie(`name`);
//логика, если 'undefined', то устанавливаем куки, иначе - только дату
if (name === 'undefined') {
  var usrName = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
  var curDate = new Date();
  document.cookie = `name=${usrName}; max-age=3600;`;
  document.cookie = `date=${curDate}; max-age=3600;`;
} else {
  alert(
    `Добрый день, ${getCookie(`name`)}! Давно не виделись. В последний раз вы были у нас дата последнего посещения ${getCookie(`date`)}`
  );
  var curDate = new Date();
  document.cookie = `date=${curDate}; max-age=3600;`;
}

// возвращает cookie если есть или undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}