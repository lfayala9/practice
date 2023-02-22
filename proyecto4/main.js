const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btnCalc = document.querySelector('#btnCalc')
const result = document.querySelector('#result')
const form = document.querySelector('#forms')


form.addEventListener('click', btnCalcOnClick)

function btnCalcOnClick(event){
    console.log({event})
    event.preventDefault()
    let suma = input1.value + input2.value;
    result.innerText = suma
}