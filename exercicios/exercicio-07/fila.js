let fila = []
let opcao = ""

do {

    let pacientes = ""

    for (
        let i = 0;
        i < fila.length;
        i++
    ) {
        pacientes += (i + 1 + "º - " + fila[i] + "\n")
    }
    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma opção:\n1. Novo Paciente\n2. Consultar Paciente\n3. Sair"
    )

    switch (opcao) {
        
        case "1":
            const novoPaciente = prompt("Qual o nome do paciente? ")
            fila.push(novoPaciente)
            break;

        case "2":
            const pacienteConsultado = fila.shift()
            if (fila.length > 0) {
                alert(pacienteConsultado + " Foi removido da fila ")
            } else {
                alert("Não há paciente na fila!")
            }
            break;

        case "3":
            alert("Encerrado....")
            break;
        default:
            alert("Opção inválida")
            break;
    }



} while (opcao !== 3);