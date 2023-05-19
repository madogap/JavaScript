const medidaInput = prompt("Insira uma Medida em Metros: ")
const unidadeMedida = prompt("Para qual unidade de medida deseja: "  + 
"\n1. milimetros (mm)" + 
"\n2. centimetros (cm)" + 
"\n3. decimetros (dm)" + 
"\n4. decametros (dam)" + 
"\n5. hectometros (hm)" + 
"\n6. quilometros (Km)" 
)

switch (unidadeMedida) {
    case "1":
        alert("Resultado " + medidaInput + "m = " + medidaInput * 1000 + "mm" )
        break;
    case "2":
        alert("Resultado " + medidaInput + " m = " + medidaInput * 100 + "cm" )
        break;
    case "3":
        alert("Resultado" + medidaInput + " m = " + medidaInput * 10 + "dm" )
        break;
    case "4":
        alert("Resultado " + medidaInput + " m = " + medidaInput / 10 + "dam" )
        break;
    case "5":
        alert("Resultado " + medidaInput + " m = " + medidaInput / 100  + "hm" )
        break;
    case "6":
        alert("Resultado " + medidaInput + " m = " + medidaInput / 1000  + "km" )
        break;

    default:
        alert("Opção inválida")
        break;
}