let saldo = prompt("Informe a quantidade de dinheito inicial: ")
valorDisponivel = parseFloat(saldo)
let opcao = ""
do {
    opcao = prompt(
        "Saldo disponível: R$ " + valorDisponivel +
        "\n1. Adicionar Dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair "
    )

    switch (opcao) {
        case "1":
            valorDisponivel += parseFloat(prompt("Informe o valor a adicionar: "))
            try {
                
            } catch (error) {
                
            }
            break;
        case "2":
            valorDisponivel -= parseFloat(prompt("Informe o valor a ser removido: "))
            break;
        case "3":
            alert("Saindo... \nValor em conta é R$" + valorDisponivel)
            break
        default:
            alert("Opcção inválida")
            break;
    }

} while (opcao !== "3");