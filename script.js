"use strict";
let btn = document.querySelector('.push');
btn.onclick = inputText;
function inputText() {
  let inpBtn = document.querySelector('.text-input').value // value обязательно, без него ничего не выведется
  let inpBtn2 = document.querySelector('.pasw-input').value;
  let inpBtn3 = document.querySelector('.ran-input').value;
  let inpBtn4 = document.querySelector('#check-input').checked;
  let inpBtn5 = document.querySelector('.cal-input').value;
  let inpBtn6 = document.querySelector('.color-input').value;
  let inpBtn7 = document.querySelector('.rad-input').value;
  console.log('логин:', inpBtn);
  console.log('пароль:', inpBtn2);
  console.log('диапазон:', inpBtn3);
  console.log('Да/нет:', inpBtn4);
  console.log('Дата:', inpBtn5);
  console.log('Цвет:', inpBtn6);
  console.log('Вариант:', inpBtn7);
 if (inpBtn4 != true) {
   alert('Нельзя отправить без согласия!')
 }
}
