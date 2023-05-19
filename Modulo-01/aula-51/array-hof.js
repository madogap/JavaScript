const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Janina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//Map transforção de array criar um novo array baseado no existente, não faz modificação no antigo array
//const nomes = []

//for (let i = 0; i < personagens.length; i++) {
//  nomes.push(personagens[i].nome)
//}
//console.log(nomes)

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})
console.log(nomes)

/*Filter selecionar elementos especifico criar um novo array com esses elementos 
const orcs = []
for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].raca === "Orc") {
        orcs.push(personagens[i])
    }
}
console.log(orcs);*/
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})
console.log(orcs)

//Reduce Transformação o array em outro valor 
const nivelTotal = personagens.reduce(function (valorAcumulado, personagem ) {
    return valorAcumulado + personagem.nivel
}, 0)
console.log(nivelTotal);


//Organizar os dados de acordo as raças
const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)

    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
}, {})
console.log(racas);

//Ele altera o array original faz comparação em pares de elementos
personagens.sort(function (a, b) {
    return a.nivel - b.nivel
})
console.log(personagens);

const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return b.nivel - a.nivel
})
console.log(personagensOrdenados);