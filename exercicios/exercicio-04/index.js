const turista = prompt("Qual é seu nome turista? ")

let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade: (s/n)")

while (continuar === "s") {
    let cidade = prompt("Qual o nome da cidade visitada? ")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (s/n)")
    
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)