'use strict'


const inputs = document.querySelectorAll('input');
const buttonForSubmitResult = document.querySelector('.btn-submit');
const btnForClearResult = document.createElement('button');
const cyrillicPattern = /^[\u0400-\u04FF]+$/;
let result = document.querySelector('.result');
let countResponses = 0;
buttonForSubmitResult.addEventListener('click', find);
btnForClearResult.addEventListener('click', clear);

// Проверка корректности вводимых данных в поле 
for (let i = 0; i < inputs.length; i++) {
   inputs[i].addEventListener('keydown', (e) => {
      if (!isNaN(e.key) && !cyrillicPattern.test(e.key) && e.keyCode !== 32 && e.key !== 'Backspace') {
         e.preventDefault();
      }
   });
}

//Проверка ответов введенных в поле и отображение итогового результата
function find() {
   if (inputs.length !== arrayOfWords.length) {
      console.error('Проверьте корректность введенных данных в словаре');
   } else {
      for (let i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute('disabled', '');
      inputs[i].style.cssText = `
         box-shadow: 1px 1px 10px 5px rgb(236, 107, 107)
         `;
      if (inputs[i].value.toLowerCase() === arrayOfWords[i].value.toLowerCase()) {
         countResponses++;
         inputs[i].style.cssText = `
   box-shadow: 1px 1px 10px 5px rgb(151, 243, 151)
   `;
      }
   }
   result.textContent = `Ваш итоговый результат теста: ${countResponses} баллов`;
   btnForClearResult.className = 'btn-for-return';
   btnForClearResult.textContent = 'Начать тест заново';
   result.append(btnForClearResult);
   buttonForSubmitResult.setAttribute('disabled', '');
   }
};

//Очистка полей ввода и удаление кнопки
function clear() {
   result.textContent = '';
   countResponses = 0;
   buttonForSubmitResult.removeAttribute('disabled');
   for (let i = 0; i < inputs.length; i++) {
      inputs[i].removeAttribute('disabled');
      inputs[i].value = '';
      inputs[i].style.cssText = `
      box-shadow: none
      `;
   }
};
