const imoveis = []

let opcao = ""

do {
    opcao = prompt(
        "Bem Vindo ao Cadastro de Imóveis\n" +
        "Total de Imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Listar dos imóveis\n3. Sair"
    )
    switch (opcao) {
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Qual o nome do proprietário: ?")
            imovel.quartos = prompt("Quantos quartos possui?")
            imovel.banheiros = prompt("Quantos banheiros tem?")
            imovel.garagem = prompt("Possui garagem: (sim/não)")

            const confirmar = confirm(
                "Salvar o imóvel\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem: " + imovel.garagem
            )

            if (confirmar) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else{
                alert("Voltando ao menu.")
            }
            break;
        case "2":
            for (
                let i = 0;
                i < imoveis.length;
                i++) {
                
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário  " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem: " + imoveis[i].garagem
                )
            }

            break;
        case "3":
            alert("Saindo...")
            
            break;

        default:
            alert("Opção errada")
            break;
    }

} while (opcao !== 3);