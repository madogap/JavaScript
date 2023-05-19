import calculate from "./calculate.js"

const input = document.querySelector('#input')
export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
}
export function handleClearButton() {
    input.value = ''
    input.focus()
}
export function handleTyping(ev) {
    //Previnido comportamento padrão
    ev.preventDefault()
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
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
}