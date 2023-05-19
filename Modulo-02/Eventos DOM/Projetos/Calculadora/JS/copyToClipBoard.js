export default function copyToClipboard(ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied'
        button.classList.add('success')
        //Copiar para area de transferencia
        navigator.clipboard.writeText(document.querySelector('#result').value)
    } else {
        //Ja alterado 
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}