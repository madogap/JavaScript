function createLabel(text, htmlFor) {
    //Criar elemeto
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}
function createInput(id, value, name, type = 'text', placeholder) {
    //Criando inputs
    const input = document.createElement('input')

    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}
//Guardando informção id do <button></button> nessa const para que quando click fazer todo o evento
const addTechBtn = document.getElementById('addTechBtn')
//Id do <form>
const form = document.getElementById('devForm')
//Onde será armazenado os developers no array
const developers = []
//Inicialinzado o número de linhas 
let inputsRows = 0

//Ouvinte de Evento para para criar <li></li> com index ID DO BUTTON evento de click e com uma função de callback
addTechBtn.addEventListener('click', function (ev) {
    //Pegar o id da <ul></ul> onde será posto um nó de <li></li>
    const stackInputs = document.getElementById('stackInputs')
    //Criar <li></li>
    const newRow = document.createElement('li')
    //Criar um id numerado nos <li>Atribuindo valores para o id e class da <li></li>
    const rowIndex = inputsRows
    inputsRows++
    newRow.id = 'inputRows-' + rowIndex
    newRow.className = 'inputRow'

    //Criando label com seu atributo for e input com seus id indexados filhos de <li></li>
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameLInput = createInput('techName-' + rowIndex, null, 'techName', 'text', 'Digite seu nome')

    //Insere nós filhos de <li></li> -> <label></label> e <input> 
    newRow.append(
        techNameLabel, techNameLInput
    )
    //Inserindo nó de <ul></ul>
    stackInputs.appendChild(newRow)

})