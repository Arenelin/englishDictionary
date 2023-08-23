'use strict'

const inputs = document.querySelectorAll('input');
let result = document.querySelector('.result');

for (let i = 0; i < inputs.length; i++){
   inputs[i].addEventListener('keydown', (e) => {
      if (!isNaN(e.key) || e.key === '+'
         || e.key === '.'
         || e.key === '-'
         || e.key === '*'
         || e.key === '/'
         || e.key === '='
         || e.key === '%'
         || e.key === '$'
         || e.key === '№'
         || e.key === '!'
         || e.key === '@'
         || e.key === '/') {
         e.preventDefault();
      }
   });
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
   for (let i = 0; i < inputs.length; i++){
      inputs[i].setAttribute('disabled', '');
      inputs[i].style.cssText = `
      box-shadow: 1px 1px 10px 5px rgb(236, 107, 107)
      `;
   }
   if (inputOne.value === 'Она' || inputOne.value === 'она') {
      countResponses++;
      createShadow(inputOne);
   }
   if (inputTwo.value === 'Тремор' || inputTwo.value === 'тремор') {
      countResponses++;
      createShadow(inputTwo);
   }
   if (inputThree.value === 'Осадки' || inputThree.value === 'осадки') {
      countResponses++;
      createShadow(inputThree)
   }
   if (inputFour.value === 'Клад' || inputFour.value === 'клад') {
      countResponses++;
      createShadow(inputFour)
   }
   if (inputFive.value === 'Утомительно' || inputFive.value === 'утомительно') {
      countResponses++;
      createShadow(inputFive)
   }
   if (inputSix.value === 'Шрам' || inputSix.value === 'шрам') {
      countResponses++;
      createShadow(inputSix)
   }
   if (inputSeven.value === 'Сцена' || inputSeven.value === 'сцена') {
      countResponses++;
      createShadow(inputSeven)
   }
   if (inputEight.value === 'Записывать' || inputEight.value === 'записывать') {
      countResponses++;
      createShadow(inputEight)
   }
   if (inputNine.value === 'История' || inputNine.value === 'история') {
      countResponses++;
      createShadow(inputNine)
   }
   if (inputTen.value === 'Имманентный' || inputTen.value === 'имманентный') {
      countResponses++;
      createShadow(inputTen)
   }
   result.textContent = `Ваш итоговый результат теста: ${countResponses} баллов`;
   btn.className = 'btn-for-return';
   btn.textContent = 'Начать тест заново';
   result.append(btn);
   button.setAttribute('disabled', '');
}


btn.addEventListener('click', clear);


function clear (){
   result.textContent = '';
   countResponses = 0;
   button.removeAttribute('disabled');
   for (let i = 0; i < inputs.length; i++){
      inputs[i].removeAttribute('disabled');
      inputs[i].value = '';
      inputs[i].style.cssText = `
      box-shadow: none
      `;
   }
}


function createShadow(input) {
   input.style.cssText = `
   box-shadow: 1px 1px 10px 5px rgb(151, 243, 151)
   `;
}