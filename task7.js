//url для проверки https://codepen.io/bananaGoose/pen/oNBeQpb
const btnGet = document.querySelector('.getList');
const usrId = document.querySelector('.idInput');
const todoList = document.querySelector('.todo');

// Функция, которая возвращаем fetch
const useRequest = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${usrId.value}/todos`)
    .then((response) => {
      return response.json();
    })
    .then((json) => { return json; })
    .catch(() => {console.log('error')});
}

function CreateView(todo)
{
    let toShow = '';
       
    for(var key in todo){  
        const todowrite = todo[key]["title"];
        const status = todo[key]["completed"];
        var toDoLi;
        if(status)
        {
            toDoLi = `<li style="text-decoration: line-through">${todowrite}</li>`;     
        }
        else
        {
            toDoLi = `<li>${todowrite}</li>`;                
        }
        toShow = toShow + toDoLi;
    }    
    todoList.innerHTML = toShow;
}

btnGet.addEventListener('click', async () => {
    const requestResult = await useRequest();
    if(requestResult.length > 0)
    {
        CreateView(requestResult);            
    }
    else
    {
        alert("Пользователь с указанным id не найден");
        CreateView(null);
    }
});
