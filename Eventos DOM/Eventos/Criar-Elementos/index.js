function add() {
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    //newLi.innerHTML='<span>Item 1</span>' //Pode abrir brechas de segurança
    newLi.innerText = 'Novo input'


    const newInput = document.createElement('input')
    newInput.type = 'Text'
    newInput.name = 'input'

    newLi.appendChild(newInput)
    ul.appendChild(newLi)

}  