//task1
//Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
let input = document.getElementById('t1imput')
let ul = document.getElementsByClassName('t1ul')
input.addEventListener('keydown', (Event) => {
    let keyevent = Event.key
    let li = document.createElement("li");
    li.style.fontsize = '20px'
    li.innerText = keyevent
    document.ul.appendChild(li)
})


//task2
//Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value
let input2 = document.getElementById('t2imput')
input2.addEventListener('keyup', (Event) =>{
    let keyevent2 = Event.value
   typeof keyevent2 == text
    console.log(keyevent2)
})


//task3
//Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
let ul3 = document.getElementsByClassName('t3ul')
let formt3 = document.getElementById('t3form')
let input3 = document.getElementById('t3input')
formt3.addEventListener('submit',(input3,ul3)=>{
    let valinp3 = input3.value
    let newli = document.createElement('li')
    newli.textContent = valinp3
    ul3.appendChild(newli)
    input3.value='  '
})


//task4
//Калькулятор. Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью evel
let form = document.getElementById('calcformt4');
let number1Input = document.getElementById('num1t4');
let number2Input = document.getElementById('num2t4');
let operationSelect = document.getElementById('selt4');
let resultDiv = document.getElementById('divt4');

form.addEventListener('submit',(Event)=>  {
    Event.preventDefault();
    let num1 = parseFloat(number1Input.value);
    let num2 = parseFloat(number2Input.value);
    let operation = operationSelect.value;

    let result;
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        result = num1 / num2;
    }

    resultDiv.textContent =  '${result}';
});


//task5
//Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
let button = document.getElementById('random-button');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; }
function getRandomColor(){
    color = 'rgb('+getRandomInteger(0,255)+','+getRandomInteger(0,255)+','+getRandomInteger(0,255)+')'
    return color
}

button.addEventListener('mouseenter',()=> {
    let randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
});

button.addEventListener('mouseleave', ()=> {
    let randomAngle = getRandomInteger(-180,180);
    button.style.transform = `rotate(${randomAngle}deg)`;
});
