function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2
    return media
}

const resultado = calcularMedia(7, 2)

//console.log(calcularMedia(4, 2));
console.log(resultado);


function criarEquipamento(nome, preco) {
    const produto = {
        nome,
        preco, 
        estoque
    }
    return produto
}

