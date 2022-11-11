// Получаем ссылки на кнопки
const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');

// Вводим переменную для получения id созданного таймером
let idInterval = null;

// Функция, которая вызывается при клике по кнопке Start
const onChangeColor = (event) => {
    onBtnDisabled ()
    idInterval = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor =`${color}`;
    }, 1000)
}

// Функция, которая вызывается при клике по кнопке Stop
const onStopChangeColor = (event) => {
    clearInterval(idInterval);
    onBtnDisabled ()
}
// Функция для генерации случайного цвета 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Функция для смены статуса кнопок (disabled) с true на false
function onBtnDisabled () {
  if (!btnStartRef.disabled) {
    btnStartRef.disabled = true;
    btnStopRef.disabled = false
  } else {
    btnStartRef.disabled = false;
    btnStopRef.disabled = true
  }
}

// Вешаем слушателей на кнопки
btnStartRef.addEventListener("click", onChangeColor);
btnStopRef.addEventListener("click", onStopChangeColor);
