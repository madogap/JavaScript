let entr1 = prompt("Primeiro numero");
let entr2 = prompt("Segundo numero");

const x = parseFloat(entr1)
const y = parseFloat(entr2)

const soma = x + y;
const subt = x - y;
const multi = x * y;
const div = x / y;

alert(
    "Resultado \n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subt +
    "\nMultiplicação: " + multi +
    "\nDivisão: " + div
)