function triangulo() {
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a altura do triângulo:")
    return (base * altura) / 2
}
function retangulo() {
    const base = prompt("Informe a base do retângulo:")
    const altura = prompt("Informe a altura do retângulo:")
    return base * altura
}
function quadrado() {
    const lado = prompt("Informe o lado do quadrado:")
    return lado * lado
}
function trapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const altura = prompt("Informe a altura do trapézio:")
    return ((baseMaior + baseMenor) * altura) / 2
}
function circulo() {
    const raio = prompt("Informe o raio do círculo:")
    return (3.14 * raio * raio)
}
function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área do triângulo\n" +
        "2. Calcular área do retângulo\n" +
        "3. Calcular área do quadrado\n" +
        "4. Calcular área do trapézio\n" +
        "5. Calcular área do círuclo\n" +
        "6. Sair\n"
    )
}
function executar() {
    let opcao = ""
    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = triangulo()
                break;
            case "2":
                resultado = retangulo()
                break;
            case "3":
                resultado = quadrado()
                break;
            case "4":
                resultado = trapezio()
                break;
            case "5":
                resultado = circulo()
                break;
            case "6":
                alert("Saindo...")
                break;

            default:
                alert("Opção Inválida")
                break;
        }
        if (resultado) {
            alert("Resultado " + resultado)
        }

    } while (opcao !== "6");

}
executar()