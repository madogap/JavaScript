const media = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}
console.log(`Média é ${media(10, 10, 10, 10)}`);

const mediaPonderada = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}
console.log(`Média Ponderada é: ${mediaPonderada(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10 }
)}`);

const median = (...numbers) => {
    //Sequencia crescente ou decrecente
    //Ordenar os numeros
    //criando um novo array clonando
    const orderNumbers = [...numbers].sort((a, b) => a - b)

    //Descobrir o meio do array
    const meio = Math.floor(orderNumbers.length / 2)
    if (orderNumbers.length % 2 !== 0) {
        //numero impar
        return orderNumbers[meio]
    }
    //1, 2, 4, 5    
    const firstMedian = orderNumbers[meio - 1]
    const secunMedian = orderNumbers[meio]
    return media(firstMedian, secunMedian)
}
console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)} `);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)} `);

const mode = (...numbers) => {
    //[[n, qtd], [n, qtd], [n, qtd]]
    const quantidades = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    //Ordenar de formar decresente
    quantidades.sort((a, b) => b[1] - a[1])
    return quantidades[0][0]

}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);