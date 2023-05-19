const arrBid = ["1º Nível", ["2º Nível", 42, true, false], [1, 2, 3, 4, 5, 6], ["Olá"], [1]]
console.log(arrBid);
console.log(arrBid[0]);
console.log(arrBid[1][0]);
console.log(arrBid[1][1]);
console.log(arrBid[1][2]);
console.log(arrBid[2][0]);
console.log(arrBid[2][1]);
console.log(arrBid[3][0]);


const matriz = [
    ["L1, c1", "L1, c2", "L1, c3", "L1, c4",],
    ["L2, c1", "L2, c2", "L2, c3", "L2, c4",],
    ["L3, c1", "L3, c2", "L4, c3", "L3, c4",]
]

console.table(matriz)
matriz.push(["L4, C1 -> Nova linha"])
matriz[0].push("L1, C4 -> Nova Coluna")
console.table(matriz)


for (
    let i = 0;
    i < matriz.length;
    i++
) {
    for (
        let j = 0;
        j < matriz[i].length;
        j++
    ) {
        console.log();
        const element = matriz[i][j];
        console.log("Posição: (" + i + "," + j + ") Valor: " + element);
    }
    //console.log(matriz[i])
}
