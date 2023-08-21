'use strict'

const inputs = document.querySelectorAll('input');
let result = document.querySelector('.result');

for (let i = 0; i < inputs.length; i++){
   inputs[i].addEventListener('keydown', (e) => {
      if (!isNaN(e.key)) {
         e.preventDefault();
      }
      button.removeAttribute('disabled');
   })
}
const btn = document.createElement('button');
let countResponses = 0;

let inputOne = document.querySelector('#input1');
let inputTwo = document.querySelector('#input2');
let inputThree = document.querySelector('#input3');
let inputFour = document.querySelector('#input4');
let inputFive = document.querySelector('#input5');
let inputSix = document.querySelector('#input6');
let inputSeven = document.querySelector('#input7');
let inputEight = document.querySelector('#input8');
let inputNine = document.querySelector('#input9');
let inputTen = document.querySelector('#input10');

let button = document.querySelector('.btn-submit');
button.addEventListener('click', find);

function find() {
   if (inputOne.value === 'Она' || inputOne.value === 'она') {
      countResponses++;
   }
   if (inputTwo.value === 'Тремор' || inputTwo.value === 'тремор') {
      countResponses++;
   }
   if (inputThree.value === 'Осадки' || inputThree.value === 'осадки') {
      countResponses++;
   }
   if (inputFour.value === 'Клад' || inputFour.value === 'клад') {
      countResponses++;
   }
   if (inputFive.value === 'Утомительно' || inputFive.value === 'утомительно') {
      countResponses++;
   }
   if (inputSix.value === 'Шрам' || inputSix.value === 'шрам') {
      countResponses++;
   }
   if (inputSeven.value === 'Сцена' || inputSeven.value === 'сцена') {
      countResponses++;
   }
   if (inputEight.value === 'Записывать' || inputEight.value === 'записывать') {
      countResponses++;
   }
   if (inputNine.value === 'История' || inputNine.value === 'история') {
      countResponses++;
   }
   if (inputTen.value === 'Имманентный' || inputTen.value === 'имманентный') {
      countResponses++;
   }
   for (let i = 0; i < inputs.length; i++){
      inputs[i].value = '';
      inputs[i].setAttribute('disabled', '');
   }
   result.textContent = `Ваш итоговый результат теста: ${countResponses} баллов`;
   btn.className = 'btn-for-return';
   btn.textContent = 'Начать тест заново';
   result.append(btn);
}


btn.addEventListener('click', clear)


function clear (){
   result.textContent = '';
   countResponses = 0;
   for (let i = 0; i < inputs.length; i++){
      inputs[i].removeAttribute('disabled');
      button.setAttribute('disabled', '');
   }
}

