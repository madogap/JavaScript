const baralho = []
let opcao = "" //Entrada do usuário

do {
    opcao = prompt(
        "Cartas no baralho " + baralho.length + "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Mostrar baralho\n4. Sair"
    )
    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual é a nova carta?")
            baralho.push(novaCarta)
            break;
        case "2":
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert("Não há nenhuma carta no baralho")
            } else {
                alert("Você puxou um(a) " + cartaPuxada)
            }
            break;
        case "3":
            alert("Cartas adicionadas " + baralho)
            break;
        case "4":
            alert("saindo....")
            break;
        default:
            alert("Opcão inválida")
            break;
    }


} while (opcao !== 4);