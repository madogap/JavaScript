//Uma function dentro do parametros
function calcular(a, b, operacao) {
    console.log("Realizando uma operação");
    const resultado = operacao(a, b)
    return resultado
}
function somar(x, y) {
    console.log("Soma realizada");
    return x + y

}

console.log(calcular(3, 5, somar))

//Funcao anonima dentro de uma funcao high-order
console.log(calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração");
    return x - y
}))

//Exibir elemento

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento, indice, array
    })
}

const lista = ["m", "b", "j", "f"]

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento);

lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento, indice, array
    });
})