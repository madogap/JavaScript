const resultado = prompt("Escolha uma alternativa: \n1 \n2 \n3")

const resultadoTNume = parseFloat(resultado)

switch (resultadoTNume) {
    case 1:
        console.log(typeof a)
        alert("resultado a")
        break;
    case 2:
        alert("resultado b")
        break
    case 3:
        alert("resultado c")
        break
    default:
        alert("Alert finalizando")
        break;
}
console.log(typeof resultadoTNume, resultadoTNume)