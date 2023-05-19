//Calcu
const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
//Somente permitidos
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
//Utilizar os elementos da calcudora
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
    //Clear
    document.getElementById('clear').addEventListener('click', function () {
        input.value = ''
        input.focus()
    })
})
input.addEventListener('keydown', function (ev) {
    //Previnido comportamento padrão
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        //Excluindo caracteres com backspace
        input.value = input.value.slice(0, -1)
    }
    //Usar o enter para efetuar as operações
    if (ev.key === 'Enter') {
        calculate()
    }
})
//Button de calcular
document.getElementById('equal').addEventListener('click', calculate)
function calculate() {
    //avaliar o codigo javascript
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    
    const result = eval(input.value)
    
    resultInput.value = result
    resultInput.classList.remove('error')
    console.log("Confirmado a calculadora");
}
//Button de copy
document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied'
        button.classList.add('success')
        //Copiar para area de transferencia
        navigator.clipboard.writeText(resultInput.value)
    } else {
        //Ja alterado 
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})
//Trocar a cor do tema
document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'

    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#f1ee0d')
        main.dataset.theme = 'dark'
    }


})