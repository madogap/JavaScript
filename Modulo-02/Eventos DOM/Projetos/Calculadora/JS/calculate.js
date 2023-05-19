export default function calculate() {
    const resultInput = document.querySelector('#result')
    //avaliar o codigo javascript
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
    console.log("Confirmado a calculadora");
}