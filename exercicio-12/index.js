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
    const techNameLInput = createInput('techName-' + rowIndex, null, 'techName', 'text', 'Digite a tecnologia')

    //Criando Radio
    const id = 'expRadio-' + rowIndex
    const expLabel = createLabel('Experiência: ', id)
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadiol = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)

    //Criando um btn pra remover a <li></li>
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function () {
        stackInputs.removeChild(newRow)
    })

    //Insere nós filhos de <li></li> -> <label></label> e <input> 
    newRow.append(
        techNameLabel, techNameLInput,
        expLabel, expRadiol,
        expLabel1, expRadio2,
        expLabel2, expRadio3,
        expLabel3, removeRowBtn
    )
    //Inserindo nó de <ul></ul>
    stackInputs.appendChild(newRow)

})

//comportomento no formnulário
form.addEventListener('submit', function (ev) {
    const fullnameInput = document.getElementById('fullname')
    const inputRow = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRow.forEach(function (row) {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({name: techName, exp: techExp})


    })
    const newDev = { fullname: fullnameInput.value, technologies: technologies}
    developers.push(newDev)
    alert('Dev cadastrado com sucesso"')

    fullnameInput.value = ''
    inputsRows.forEach(function(row) {
        row.remove()
    })

    console.log(developers);
})



