const arr = ["A", "B", "C", "D", "E", "F"]
console.log(`Matriz original com seu elementos [${arr}]`);
//Acrescenta novos elementos ao final de uma matriz e retorna o novo comprimento da matriz.
let newSizeHeadquarters = arr.push("D") //E retorna o novo comprimento da matriz.
console.log(`Nova matriz depois do methodo push [${arr}]`);//Methodo push Adiciona no final do arr
console.log(`Novo tamanho da matriz [${newSizeHeadquarters}]`); //Podemos ter sempre o length of the arr.

/**Insere novos elementos no início de uma matriz e retorna o novo comprimento da matriz.*/
let newLengthUnshift = arr.unshift(2)
console.log(`Methodo Unshift Insere novos elementos no início de uma matriz \nlet newLengthUnshift = arr.unshift(2) -> [${arr}]`);
console.log(`O retorna o novo comprimento da matriz fica salvo na let newLengthUnshift 
Assim o tamanho do arr posso busacr novo tamanho da matriz ${newLengthUnshift}`);

/*Remove o último elemento de uma matriz e o retorna. 
Se o arr estiver vazio, retorna indefinido e o arr não é modificado.*/
const ultimoElemento = arr.pop()
console.log(`Elementos que será removido com o methodo Pop-> ${ultimoElemento} e o retorno da matriz fica [${arr}]`);
console.log(arr)
console.log(arr.length)

/*Shift remover do inicio Remove o primeiro elemento de uma matriz e o retorna. Se o arr estiver vazio, 
indefinido é retornado e o arr não é modificado*/
let removerPrimeiroElemento = arr.shift()
console.log(removerPrimeiroElemento);
console.log(arr);
console.log(arr.length);

/*Determina se uma matriz inclui um determinado elemento,
retornando true ou false conforme apropriado.*/
const existeNoArr = arr.includes("A")
console.log(arr);
console.log(existeNoArr)

/*IndexOf O valor a ser localizado na matriz.
Retorna o índice da primeira ocorrência de um valor em uma matriz ou -1 se não estiver presente.*/
const indice = arr.indexOf("C")
console.log(arr);
console.log(indice);

/*Cortar Slice
Retorna uma cópia de uma seção de uma matriz.  
Para início e fim, um índice negativo pode ser usado para indicar um deslocamento do final da matriz.
Por exemplo, -2 refere-se ao penúltimo elemento da matriz.*/
const cortar = arr.slice(0, -4)
console.log(arr);
console.log(cortar);

/*Concat concatenar dois arrays
Combina dois ou mais arrays. 
Este método retorna uma nova matriz sem modificar nenhuma matriz existente.*/
const objetos = { a: "Objeto", b: "Mais um objeto", c: 2 }
const maisUmArr = [1, 2, 3, 4, 5, 6,]
const juntas = arr.concat(objetos, maisUmArr)
console.log("------JUNTOU ARRAYS COM OBJETO------" + arr + "," + objetos + maisUmArr);
console.log(juntas);

/*Substituição dos elementos
Splice
Remove elementos de um array e, se necessário, 
insere novos elementos em seu lugar, retornando os elementos deletados.
@param start — A localização baseada em zero na matriz da qual começar a remover elementos.
@param deleteCount — O número de elementos a serem removidos.
@returns — Uma matriz contendo os elementos que foram excluídos.*/
const elementosRemovidos = juntas.splice(indice, 1, "NOVO ELEMENTO SUBSTITUIDO")
console.log(juntas);
console.log(elementosRemovidos);

//Interando sobre os elementos
for (
    let i = 0;
    i < juntas.length;
    i++
) {
    const elemento = juntas[i];
    console.log(elemento + " se encontra na posição: " + i);
}
