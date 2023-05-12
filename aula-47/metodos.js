//fUNCAO ATRELADA A UM OBJETO { }

let pessoa = {
    nome: "Marcus",
    idade: 35,
    dizerOla() {
        console.log("Olá, mundo! " + this.nome);
    }
}

console.log(pessoa);
pessoa.dizerOla()

