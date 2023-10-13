let calculation = localStorage.getItem('calculation') || (
  '');
if (calculation === ''){
  document.querySelector('.js-calculation')
    .innerHTML = '0';
  console.log('0');
} else {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
  console.log(calculation);
}
console.log(calculation);

function calculate(add){
  calculation += add;
  localStorage.setItem('calculation', calculation);
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
  console.log(calculation);
};